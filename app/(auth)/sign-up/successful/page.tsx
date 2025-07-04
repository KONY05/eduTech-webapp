import React from "react";
import SuccessPage from "@/components/SuccessPage";

function Page({}: { children: React.ReactNode }) {
  return (
    <SuccessPage
      imageUrl="/examPadiLogo.png"
      heading="Lets, Go!!!"
      text="Your Account has been created successfully!!"
      btnText="Continue"
    />
  );
}

export default Page;
