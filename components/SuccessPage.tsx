import React from "react";
import Image from "next/image";
import { SuccessPageProps } from "@/utils/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function SuccessPage({ imageUrl, heading, text, btnText }: SuccessPageProps) {
  return (
    <main className="relative h-screen bg-[#2F2D51]">
      <Image
        src="/examPadiLogo.png"
        alt="Exam Padi Logo"
        width={50}
        height={50}
        className="px-3 pt-3"
      />
      <div className="relative z-50 mx-auto flex h-[80vh] w-[80%] flex-col items-center justify-center gap-3 md:w-[30%] md:gap-4">
        <div className="rounded-full bg-[#52516F] p-8">
          <Image src={imageUrl} alt="image" width={80} height={80} />
        </div>
        <div className="text-center">
          <p className="text-3xl/[38px] font-medium text-white">{heading}</p>
          <p className="md:text-normal text-[12px] text-[#EDE9EE]">{text}</p>
        </div>
        <Button className="w-full rounded-xl bg-white font-semibold text-black">
          <Link href="/sign-in">{btnText}</Link>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 z-10 opacity-0">
        <Image
          src="/blurLayoutImage.png"
          alt="layout Image"
          width="300"
          height="100"
          className="md:w-[600px]"
        />
      </div>
    </main>
  );
}

export default SuccessPage;
