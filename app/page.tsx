import Header from "@/components/Header";
import { HomeHeaderInfo, RecentlyViewedLessons, RecommendedLessons } from "@/lib/constants";
import { Bookmark } from "lucide-react";
import Image from "next/image";

function Page() {
  return (
    <main>
      {/* <NavBar/> */}
      <section>
        <Header />
        <section className="px-4 py-3 md:px-12 md:py-6">
          <div className="rounded-[30px] bg-[#2F2D51] px-4 py-4 text-white md:px-12 md:py-8">
            <p className="text-2xl font-semibold md:text-3xl">Hi Konyinsola,</p>
            <p className="text-sm md:text-[16px]">Welcome Back!</p>

            <div className="mt-4 grid grid-cols-2 gap-2.5 max-[321px]:gap-2 md:mt-8 md:grid-cols-4">
              {HomeHeaderInfo.map((info, index) => {
                const { image, bg_color, text, subText } = info;

                return (
                  <div
                    key={index}
                    className={`${bg_color} flex gap-2 rounded-[8px] px-6 py-[26px] max-[321px]:flex-col max-[321px]:px-3`}
                  >
                    <Image src={image} alt={image} width={40} height={40} />
                    <div className="font-medium">
                      <h1 className="text-lg">{text}</h1>
                      <p className="text-[12px] text-[#E6E6EA]">{subText}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 lg:mt-12 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold md:text-lg">
                Recently Viewed Lessons
              </h2>
              <p className="cursor-pointer text-sm font-medium text-[#F04438] underline-offset-1 hover:underline">
                See all
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {RecentlyViewedLessons.map((lesson, index) => {
                const { image, title, level, subject, sub_topics, lesson_amt } =
                  lesson;
                return (
                  <div key={index}>
                    <Image src={image} alt="title" width={350} height={50} />
                    <div className="space-y-2 mt-2">
                      <p className="font-semibold text-sm">{title}</p>
                      <div className="flex items-center gap-2">
                        <p className="bg-[#FDDCC2] text-[#996741] px-2 py-0.5 rounded-sm font-medium text-[12px]">{level}</p>
                        <p className="px-2 py-0.5 rounded-sm font-medium text-[12px] bg-[#BCBFDF] text-[#383D6C]">{subject}</p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {sub_topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="rounded-sm bg-[#E6E6EA] px-2 py-0.5 text-xs text-[#2F2D51] font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                          <span>
                            <Image
                              src="/icons/layout-list.svg"
                              alt="layout icon"
                              width={15}
                              height={15}
                            />
                          </span>
                          <p className="text-[#6B7083] text-xs">
                            {lesson_amt} Lesson{lesson_amt > 1 ? "s" : ""}
                          </p>
                        </div>
                        <Bookmark className="size-4.5 text-[#6B7083]"/>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 lg:mt-12 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold md:text-lg">
                Recommended Lessons
              </h2>
              <p className="cursor-pointer text-sm font-medium text-[#F04438] underline-offset-1 hover:underline">
                See all
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {RecommendedLessons.map((lesson, index) => {
                const { image, title, level, subject, sub_topics, lesson_amt } =
                  lesson;
                return (
                  <div key={index}>
                    <Image src={image} alt="title" width={350} height={50} className="rounded-t-xl"/>
                    <div className="space-y-2 mt-2">
                      <p className="font-semibold text-sm">{title}</p>
                      <div className="flex items-center gap-2">
                        <p className="bg-[#FDDCC2] text-[#996741] px-2 py-0.5 rounded-sm font-medium text-[12px]">{level}</p>
                        <p className="px-2 py-0.5 rounded-sm font-medium text-[12px] bg-[#BCBFDF] text-[#383D6C]">{subject}</p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {sub_topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="rounded-sm bg-[#E6E6EA] px-2 py-0.5 text-xs text-[#2F2D51] font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center gap-1">
                          <span>
                            <Image
                              src="/icons/layout-list.svg"
                              alt="layout icon"
                              width={15}
                              height={15}
                            />
                          </span>
                          <p className="text-[#6B7083] text-xs">
                            {lesson_amt} Lesson{lesson_amt > 1 ? "s" : ""}
                          </p>
                        </div>
                        <Bookmark className="size-4.5 text-[#6B7083]"/>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Page;
