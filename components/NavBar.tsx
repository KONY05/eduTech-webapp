"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { BookOpen, CircleUser, Film, House, TvMinimal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();

  const isActive = (link: string) => pathname === link;

  return (
    <section className="hidden px-8 pt-8 lg:flex lg:flex-col lg:justify-between lg:overflow-y-hidden lg:border-r">
      <div className="space-y-6">
        <Image
          src="/examPadiLogo.png"
          alt="examPadiLogo"
          width={50}
          height={50}
        />

        <nav>
          <ul className="flex flex-col gap-1 pb-4">
            <Link href="/">
              <li
                className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-4 text-sm font-medium hover:bg-[#B2F4DC] hover:text-[#4D2456] ${isActive("/") ? "bg-[#B2F4DC] text-[#4D2456]" : "text-[#B6A5BA]"}`}
              >
                <House /> Home
              </li>
            </Link>
            <Link href="/lesson">
              <li
                className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-4 text-sm font-medium hover:bg-[#B2F4DC] hover:text-[#4D2456] ${isActive("/lesson") ? "bg-[#B2F4DC] text-[#4D2456]" : "text-[#B6A5BA]"}`}
              >
                <Film /> Lessons
              </li>
            </Link>
            <li
              className={`flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-4 text-sm font-medium hover:bg-[#B2F4DC] hover:text-[#4D2456] ${isActive("/cbt") ? "bg-[#B2F4DC] text-[#4D2456]" : "text-[#B6A5BA]"}`}
            >
              <TvMinimal /> CBT
            </li>
            <li
              className={`flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-4 text-sm font-medium hover:bg-[#B2F4DC] hover:text-[#4D2456] ${isActive("/library") ? "bg-[#B2F4DC] text-[#4D2456]" : "text-[#B6A5BA]"}`}
            >
              <BookOpen /> Library
            </li>
            <li
              className={`flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-4 text-sm font-medium hover:bg-[#B2F4DC] hover:text-[#4D2456] ${isActive("/profile") ? "bg-[#B2F4DC] text-[#4D2456]" : "text-[#B6A5BA]"}`}
            >
              <CircleUser /> Profile
            </li>
          </ul>
        </nav>
      </div>

      <div className="mb-24 space-y-6">
        <div className="border-y py-4">
          <div className="space-y-4 rounded-xl bg-[#F3F2FF] p-3">
            <p className="text-center text-sm font-medium text-[#6B7083]">
              Get Exampadi on your mobile app
            </p>
            <div className="space-y-2">
              <Image
                src="/playStore.png"
                alt="Exampadi PlayStore Download"
                width={200}
                height={50}
                className="cursor-pointer"
              />
              <Image
                src="/appStore.png"
                alt="Exampadi Apple Store Download"
                width={200}
                height={50}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>

        <Button className="w-full rounded-[20px] bg-[#2F2D51] py-4.5 hover:bg-[#3e3c65]">
          <Image
            src="/icons/help-circle.svg"
            alt="icon"
            width={15}
            height={15}
          />{" "}
          Get Help
        </Button>
      </div>
    </section>
  );
}

export default NavBar;
