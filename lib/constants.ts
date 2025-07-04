import { SubscriptionType } from "@/utils/types";

export const SUBSCRIPTION_DATA: SubscriptionType = [
  {
    plan: "primary",
    description:
      "This package contains video lessons & CBT practice questions for the Primary school level preparing for common entrance exam.",
    planType: [
      {
        name: "For 1 Month",
        price: "1,000",
        perMonth: "1,000",
      },
      {
        name: "For 3 Months",
        price: "1,500",
        perMonth: "500",
      },
      {
        name: "For 12 Month",
        price: "3,500",
        perMonth: "300",
      },
    ],
  },
  {
    plan: "junior",
    description:
      "This package contains video lessons & CBT practice questions for the Junior secondary school level preparing for BECE exam.",
    planType: [
      {
        name: "For 1 Month",
        price: "1,500",
        perMonth: "1,500",
      },
      {
        name: "For 3 Months",
        price: "2,500",
        perMonth: "830",
      },
      {
        name: "For 12 Month",
        price: "5,500",
        perMonth: "500",
      },
    ],
  },
  {
    plan: "senior",
    description:
      "This package contains video lessons, WAEC, NECO, JAMB and SAT past questions for the Senior secondary school level.",
    planType: [
      {
        name: "For 1 Month",
        price: "2,000",
        perMonth: "2,000",
      },
      {
        name: "For 3 Months",
        price: "3,00",
        perMonth: "1,000",
      },
      {
        name: "For 12 Month",
        price: "10,500",
        perMonth: "875",
      },
    ],
  },
  {
    plan: "full",
    description:
      "This package is a combination of all other packages. Subscribe and you get access to the Primary, Junior and Secondary content",
    planType: [
      {
        name: "For 1 Month",
        price: "1,000",
        perMonth: "1,000",
      },
      {
        name: "For 3 Months",
        price: "1,500",
        perMonth: "500",
      },
      {
        name: "For 12 Month",
        price: "3,600",
        perMonth: "300",
      },
    ],
  },
];

