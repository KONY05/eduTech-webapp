"use client";

import { Subscription } from "@/utils/types";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getBackgroundColor } from "@/lib/constants";

function SubscriptionContainer({
  subscription,
}: {
  subscription: Subscription;
  }) {
  const [checkedIndex, setCheckedIndex] = useState(0);
  const router = useRouter()

  const { plan, description, planType } = subscription;

  const getShadowColor = (plan: string) => {
    switch (plan) {
      case "primary":
        return "shadow-[#FDE49980]";
      case "junior":
        return "shadow-[#C2E3D580]";
      case "senior":
        return "shadow-[#F9B2AD80]";
      case "full":
        return "shadow-[#B3B7E880]";
      default:
        return "shadow-[#FDE49980]";
    }
  };

  const getCheckboxColor = (plan: string) => {
    switch (plan) {
      case "junior":
        return "data-[state=checked]:bg-[#6BBB99]";
      case "senior":
        return "data-[state=checked]:bg-[#F04438]";
      case "full":
        return "data-[state=checked]:bg-[#5B64B1]";
      case "primary":
        return "data-[state=checked]:bg-[#FBBE07]";
      default:
        return "data-[state=checked]:bg-[#FBBE07]";
    }
  };

  function handleSubscriptionPlan() {
    localStorage.setItem("subscriptionPlan", plan);
    console.log("subscription plan has been set to: ", plan);
    router.push("/")
    
  }

  return (
    <div className="relative">
      <div className="absolute -top-5 left-5 z-0 md:-top-5 md:left-10 lg:left-35">
        <Image src="/stars.png" alt="stars" width={30} height={30} />
      </div>

      <div className="relative z-50 mx-auto mt-5 w-[80%] text-center md:mt-15 lg:w-[35%]">
        <h1 className="text-lg font-medium md:text-3xl">
          Choose a <span className="capitalize">{plan}</span> Subscription Plan
        </h1>
        <p className="text-sm text-[#6B7083] md:text-[16px]">{description}</p>
        <div className="mt-3.5 flex flex-col gap-3 md:mt-8">
          {planType.map((type, index) => (
            <div
              key={type.name}
              onClick={() => setCheckedIndex(index)}
              className="cursor-pointer"
            >
              <Label
                className="relative cursor-pointer text-white"
                htmlFor={type.name}
              >
                <div
                  className={`flex w-full justify-between rounded-lg border p-4 text-left ${
                    checkedIndex === index
                      ? `${getBackgroundColor(plan)} ${getShadowColor(plan)} shadow-md` // You can customize this for other plans
                      : "bg-white text-black" // White background for unchecked items
                  }`}
                >
                  <div className="space-y-2">
                    <p className="font-medium md:text-[20px]">{type.name}</p>
                    <p className="text-[12px] md:text-[16px]">₦ {type.price}</p>
                  </div>
                  <div
                    className={`text-[12px] text-[#6B7083] md:text-[16px] ${checkedIndex === index && "text-white"} ${index !== 0 && "flex flex-col justify-between"}`}
                  >
                    {index !== 0 && <p>Equivalent to </p>}
                    <p>₦ {type.perMonth}/ month</p>
                  </div>

                  <Checkbox
                    id={type.name}
                    checked={checkedIndex === index}
                    className={`absolute -top-2 -right-1.5 h-4 w-4 rounded-full border-white ${
                      checkedIndex === index &&
                      `data-[state=checked]:border-white ${getCheckboxColor(plan)} data-[state=checked]:text-white`
                    }`}
                  />
                </div>
              </Label>
            </div>
          ))}
        </div>
        <div className="mt-4 md:mt-8">
          <Button className="w-full rounded-xl bg-[#2F2D51] hover:bg-[#3a3860]" onClick={handleSubscriptionPlan}>
            Buy now
          </Button>
          {plan !== "full" && (
            <div className="mt-3">
              <Link href="/subscription/?subscription=full">
                <p className="text-[12px] text-[#52516F] hover:underline hover:underline-offset-2 md:text-[16px]">
                  Subscribe to Full Subscription plan
                </p>
              </Link>
              <div className="flex skew-3 justify-end">
                <Image
                  src={`/${plan}-arrow.png`}
                  alt={`${plan}-arrow`}
                  width={50}
                  height={50}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SubscriptionContainer;
