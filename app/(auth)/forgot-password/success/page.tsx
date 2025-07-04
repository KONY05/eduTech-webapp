import React from "react";
import SuccessPage from "@/components/SuccessPage";

function Page({}: { children: React.ReactNode }) {
  return (
    <SuccessPage
      imageUrl="/forgotPasswordSuccessImg.png"
      heading="Check your email!"
      text="Instruction has been sent to your email"
      btnText="Check it out"
      link="/sign-in"
    />
  );
}

export default Page;
