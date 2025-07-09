import { SubscriptionType } from "@/utils/types";

// Define color styling for different subscription plans
export const getBackgroundColor = (plan: string) => {
  switch (plan) {
    case "primary":
      return "bg-[#FBBE07]";
    case "junior":
      return "bg-[#6BBB99]";
    case "senior":
      return "bg-[#F04438]";
    case "full":
      return "bg-[#5B64B1]";
    default:
      return "bg-[#FBBE07]";
  }
};

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

export const HomeHeaderInfo = [
  {
    image: "icons/lesson.svg",
    bg_color: "bg-[#000519]",
    text: "2",
    subText: "Lessons Completed",
  },
  {
    image: "icons/medal.svg",
    bg_color: "bg-[#6BBB99]",
    text: "39/50",
    subText: "Highest Test Score",
  },
  {
    image: "icons/lightbulb.svg",
    bg_color: "bg-[#FAA96A]",
    text: "15",
    subText: "Text Quiz Completed",
  },
  {
    image: "icons/star.svg",
    bg_color: "bg-[#5B64B1]",
    text: "42/50",
    subText: "Average Score",
  },
];

export const RecentlyViewedLessons = [
  {
    image: "/mutiplicationLesson.png",
    title: "Multiplication",
    level: "Primary Class",
    subject: "Mathematics",
    sub_topics: ["Number Operations", "Arithmetic"],
    lesson_amt: 3,
  },
  {
    image: "/civicLesson.png",
    title: "Valuing Nigerian Goods",
    level: "Primary Class",
    subject: "Civic-Education",
    sub_topics: ["Human rights education"],
    lesson_amt: 1,
  },
  {
    image: "/mutiplicationLesson.png",
    title: "Multiplication",
    level: "Primary Class",
    subject: "Mathematics",
    sub_topics: ["Number Operations", "Arithmetic"],
    lesson_amt: 3,
  },
];

export const RecommendedLessons = [
  {
    image: "/fractionLesson.png",
    title: "Fractions and Decimals",
    level: "Primary Class",
    subject: "Mathematics",
    sub_topics: ["Number Operations", "Arithmetic"],
    lesson_amt: 9,
  },
  {
    image: "/englishLesson.png",
    title: "Synonyms and Antonyms",
    level: "Primary Class",
    subject: "English",
    sub_topics: ["Vocabulary"],
    lesson_amt: 3,
  },
  {
    image: "/fractionLesson.png",
    title: "Multiplication",
    level: "Primary Class",
    subject: "Mathematics",
    sub_topics: ["Number Operations", "Arithmetic"],
    lesson_amt: 9,
  },
];

export const LessonContent = [
  {
    lessonName: "Intro to Multiplication",
    duration: "01:00",
  },
  {
    lessonName: "Basic Multiplication",
    duration: "03:33",
  },
  {
    lessonName: "More ways to Multiply",
    duration: "05:03",
  },
];
