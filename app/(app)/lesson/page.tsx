"use client";

import { LessonContent } from "@/lib/constants";
import { AISummary } from "@/lib/gemini";
import {
  Bookmark,
  Download,
  Loader,
  LucideArrowLeft,
  Sparkles,
  SquarePlay,
  Upload,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

function LessonPage() {
  const router = useRouter();
  const [view, setView] = useState("overview");
  const [lesson, setLesson] = useState(0);
  const [summary, setSummary] = useState("");
  // Add separate state for errors
  const [summaryError, setSummaryError] = useState("");
  const abortControllerRef = useRef<AbortController | null>(null);

  function handleBackClick() {
    router.back();
  }

  async function handleGenerateSummary() {
    try {
      // Check if we have a valid summary (not an error message)
      if (summary && !summaryError) return;

      // Clear any previous error
      setSummaryError("");

      // Create new AbortController for this request
      const controller = new AbortController();
      abortControllerRef.current = controller;

      // Create a promise that can be aborted
      const summaryPromise = AISummary("/video/testVideo.mov");

      // Race between the summary promise and abort signal
      const result = await Promise.race([
        summaryPromise,
        new Promise<never>((_, reject) => {
          controller.signal.addEventListener("abort", () => {
            reject(new Error("Request was cancelled"));
          });
        }),
      ]);

      // Only set summary if request wasn't aborted
      if (!controller.signal.aborted) {
        setSummary(result);
      }

      // Clear the controller reference
      abortControllerRef.current = null;
    } catch (error) {
      const err = error as Error;
      // Don't show error if it was just aborted
      if (err.message === "Request was cancelled") {
        console.log("Summary generation was cancelled");
        return;
      }

      console.error("Error generating summary:", err);
      setSummaryError("Failed to generate summary. Please try again later.");
      setSummary("");
    }
  }

  return (
    <main className="relative px-4 pt-4 pb-14 md:pt-8 md:pb-[76px] lg:pr-24 lg:pl-12">
      <div className="relative">
        <p className="flex w-full cursor-pointer items-center gap-2.5 text-[14px] underline-offset-2 hover:underline md:text-[16px]">
          <LucideArrowLeft className="size-4" onClick={handleBackClick} />
          Back
        </p>
        <div className="absolute -top-4 right-7 z-0">
          <Image src="/stars.png" alt="stars" width={30} height={30} />
        </div>
      </div>

      <section className="relative z-50 mt-3 space-y-3 md:mt-6 md:space-y-6">
        <div className="lg:flex lg:justify-center">
          <video
            src="/video/testVideo.mp4"
            controls
            controlsList="nodownload"
            className="lg:h-[500px]"
          />
        </div>

        <div className="bg-white px-4 md:px-8">
          <div className="space-y-2 border-b pb-4 md:space-y-4">
            <h1 className="text-xl font-medium">Lesson 1</h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Bookmark className="size-4.5 text-[#6B7083]" />
                <Upload className="size-4.5 text-[#6B7083]" />
              </div>

              {/* TODO: Implement download functionality */}
              <p className="flex items-center gap-2 text-sm font-medium text-[#6B7083] underline-offset-2 hover:underline">
                Download Lesson <Download className="size-4.5 text-[#6B7083]" />
              </p>
            </div>
          </div>

          <div className="mt-4.5">
            <ul className="flex cursor-pointer justify-between text-sm font-medium md:text-[16px]">
              <li
                className={`w-full border-b pb-2 text-center ${view === "overview" && "border-b-4 border-[#FBBE07]"}`}
                onClick={() => {
                  // Cancel any ongoing AI summary fetch with null check
                  if (abortControllerRef.current) {
                    abortControllerRef.current.abort();
                    abortControllerRef.current = null;
                  }
                  setView("overview");
                }}
              >
                Overview
              </li>
              <li
                className={`w-full border-b pb-2 text-center ${view === "content" && "border-b-4 border-[#FBBE07]"}`}
                onClick={() => {
                  // Cancel any ongoing AI summary fetch with null check
                  if (abortControllerRef.current) {
                    abortControllerRef.current.abort();
                    abortControllerRef.current = null;
                  }
                  setView("content");
                }}
              >
                Content
              </li>
              <li
                className={`flex w-full items-center justify-center gap-1 border-b pb-2 ${view === "genAI_summary" && "border-b-4 border-[#FBBE07]"}`}
                onClick={async () => {
                  setView("genAI_summary");
                  await handleGenerateSummary();
                }}
              >
                <span className="hidden md:inline">Generate</span>AI Summary{" "}
                <Sparkles className="size-3.5 text-[#6B7083]" />
              </li>
            </ul>

            <div>
              {view === "overview" && (
                <div className="p-4">
                  <p className="text-sm/relaxed font-normal text-[#6B7083] md:text-[16px]">
                    Multiplication is the process of calculating the product of
                    two or more numbers. The multiplication of numbers say,
                    &apos;a&apos; and &apos;b&apos;, is stated as &apos;a&apos;
                    multiplied by &apos;b&apos;. In Maths, the basic explanation
                    of multiplication is adding a number, with respect to
                    another number, repeatedly. <br /> <br />
                    In math, multiplication is the method of finding the product
                    of two or more numbers. It is a primary arithmetic operation
                    that is used quite often in real life. Multiplication is
                    used when we need to combine groups of equal sizes. Let us
                    learn more about multiplication in this page.
                  </p>
                </div>
              )}

              {view === "content" && (
                <div className="space-y-4 p-4">
                  {LessonContent.map((content, index) => {
                    const { lessonName, duration } = content;
                    return (
                      <div
                        key={index}
                        onClick={() => setLesson(index)}
                        className={`flex cursor-pointer items-center justify-between ${lesson === index ? "border-l-2 border-[#2F2D51] bg-[#EAEAEE] text-[#2F2D51]" : "text-[#6B7083]"} p-3.5`}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className={`rounded-lg border p-1.5 ${lesson === index ? "bg-[#2F2D51] text-white" : "bg-[#E6E6EA]"}`}
                          >
                            <SquarePlay className="size-3.5" />
                          </span>
                          <p className="text-sm">{lessonName}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-xs">{duration}</span>
                          <Download className="size-3.5" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {view === "genAI_summary" && (
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-medium">AI Summary</h2>
                  <p className="text-sm/relaxed font-normal text-[#6B7083] md:text-[16px]">
                    {summaryError && (
                      <span className="text-red-500">{summaryError}</span>
                    )}

                    {!summaryError && summary && (
                      <span className="">{summary}</span>
                    )}

                    {!summaryError && !summary && (
                      <span className="flex items-center gap-2">
                        Processing video and generating summary... This may take
                        a moment. <Loader className="size-4 animate-spin" />
                      </span>
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <Image
          src="/blurLayoutImg.png"
          alt="layout Image"
          width={400}
          height={100}
          className="absolute bottom-0 left-0 md:w-[600px]"
        />
      </div>
    </main>
  );
}

export default LessonPage;
