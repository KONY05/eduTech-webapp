"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { getBackgroundColor } from "@/lib/constants";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import Image from "next/image";

function Header() {
  const [level, setLevel] = useState<string | null>("");

  useEffect(() => {
    function getLevel() {
      setLevel(() => localStorage.getItem("subscriptionPlan"));
    }
    getLevel();
  }, []);
// TODO: Implement Mobile Nav
  return (
    <header className="justify-between lg:justify-end border-b px-2 py-3 flex items-center gap-3 md:py-4 md:pr-12">
      <Menu className="lg:hidden cursor-pointer"/>
      <div className="flex items-center gap-4">
        <Button
          className={`capitalize ${getBackgroundColor(level!)} text-xs font-medium md:text-sm`}
        >
          {level} level <ChevronDown />
        </Button>
        <Search className="size-5 cursor-pointer" />
        <Bell className="size-5 cursor-pointer hover:animate-pulse" />

        <div className="flex items-center gap-3 rounded-[1000px] border px-3 py-1.5">
          <Image
            src="/KonyScript Logo.png"
            alt="my logo"
            width={30}
            height={30}
            className="rounded-full object-center"
          />
          <p className="text-[10px]">Odesanya Konyinsola</p>
          <ChevronDown />
        </div>
      </div>
    </header>
  );
}

export default Header;
