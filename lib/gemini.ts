"use server";

import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
} from "@google/genai";
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export async function AISummary(videoPath: string): Promise<string> {
  try {
    console.log("Reading file from:", videoPath);

    const filePath = path.join(process.cwd(), 'public', videoPath);
    
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const fileBuffer = fs.readFileSync(filePath);
    const fileBlob = new Blob([fileBuffer], { type: 'video/mov' });

    console.log("Uploading file to Google AI...");

    const myfile = await ai.files.upload({
      file: fileBlob,
      config: { mimeType: "video/mp4" },
    });

    if (!myfile.name) {
      throw new Error("File upload failed - no file name returned");
    }

    console.log("File uploaded, waiting for processing...");

    let file = await ai.files.get({ name: myfile.name });
    let attempts = 0;
    const maxAttempts = 30;

    while (file.state === "PROCESSING" && attempts < maxAttempts) {
      console.log(`File is still processing, waiting... (${attempts + 1}/${maxAttempts})`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      file = await ai.files.get({ name: myfile.name });
      attempts++;
    }

    if (file.state === "PROCESSING") {
      throw new Error("File processing timeout - please try again");
    }

    if (file.state === "FAILED") {
      throw new Error("File processing failed");
    }

    console.log("File is now active, generating summary...");

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: createUserContent([
        createPartFromUri(file.uri ?? "", file.mimeType ?? ""),
        "Summarize this video into valuable key points",
      ]),
    });

    console.log("Summary generated successfully");

    if (!response.text) {
      throw new Error("No summary generated");
    }

    return response.text;
  } catch (error) {
    const err = error as Error;
    console.error("Error in AISummary:", err);
    throw new Error("Failed to generate summary: " + err.message);
  }
}

// Function to generate a summary of a video using Google Gemini AI (link upload)
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// export async function URLAISummary(videoUrl: string) {
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
//   const result = await model.generateContent([
//     "Please summarize the video in 3 sentences.",
//     {
//       fileData: {
//         fileUri: videoUrl,
//       },
//     },
//   ]);
//   console.log(result.response.text());
// }
