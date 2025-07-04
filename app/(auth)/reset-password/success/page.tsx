import React from "react";
import SuccessPage from "@/components/SuccessPage";

function Page() {
  return (
    <SuccessPage
      imageUrl="/resetPasswordSuccessImg.png"
      heading="Yaay!"
      text="Password Changed Successfully"
      btnText="Proceed to Log in"
      link="/sign-in"
    />
  );
}

export default Page;
