import React from "react";
import Image from "next/image";
import { ChevronsRight, X } from "lucide-react";
import { SUBSCRIPTION_DATA } from "@/lib/constants";
import SubscriptionContainer from "@/components/SubscriptionContainer";
import Link from "next/link";

type SubscriptionUrlProps = "full" | "primary" | "junior" | "senior";

function Page({
  searchParams,
}: {
  searchParams: { subscription: SubscriptionUrlProps };
}) {
  const subscriptionName: SubscriptionUrlProps = searchParams.subscription;
  const plan = SUBSCRIPTION_DATA.filter(
    (subscription) => subscription.plan === subscriptionName,
  );
  console.log(subscriptionName);
  return (
    <main>
      <header className="flex items-center justify-between p-3 md:p-5 lg:mx-8">
        <Image
          src="/examPadiLogo.png"
          alt="ExamPadi Logo"
          width="40"
          height="40"
        />
      </header>
      <div className="flex items-center px-4 md:pl-12">
        {subscriptionName === "full" && (
          <Link href="/">
            <p className="relative z-50 flex w-full items-center justify-start gap-1.5 text-[14px] underline-offset-1 hover:underline md:text-[16px]">
              <X className="size-4" />
              Cancel
            </p>
          </Link>
        )}
        {subscriptionName !== "full" && (
          <Link href="/">
            <p className="flex w-full items-center justify-end gap-1.5 text-[14px] underline-offset-1 hover:underline md:text-[16px]">
              Skip <ChevronsRight className="size-4" />
            </p>
          </Link>
        )}
      </div>
      <section className="">
        {plan.map((subscription, index) => (
          <div key={index}>
            <SubscriptionContainer subscription={subscription} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Page;
