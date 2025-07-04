import React from "react";
import { Subscription } from "@/utils/types";
import Image from "next/image";

function SubscriptionContainer({
  subscription,
}: {
  subscription: Subscription;
}) {
  //console.log(subscription);
  const { plan, description, planType } = subscription;
  return (
    <div className="relative">
      <div className="absolute -top-5 left-10 z-0">
        <Image src="/stars.png" alt="stars" width={30} height={30} />
      </div>
      <div className="relative z-50 mx-auto mt-8 w-[80%] text-center">
        <h1 className="text-lg font-medium md:text-3xl">
          Choose a <span className="capitalize">{plan}</span> Subscription Plan
        </h1>
        <p className="text-sm text-[#6B7083] md:text-[16px]">{description}</p>
        <div>
          {planType.map((type) => (
            <div key={type.name}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubscriptionContainer;
