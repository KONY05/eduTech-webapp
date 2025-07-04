import React from "react";
import SuccessPage from "@/components/SuccessPage";

function Page({}: { children: React.ReactNode }) {
  return (
    <SuccessPage
      imageUrl="/signupSuccessImg.png"
      heading="Lets, Go!!!"
      text="Your Account has been created successfully!!"
      btnText="Continue"
      link="/sign-in"
    />
  );
}

export default Page;
