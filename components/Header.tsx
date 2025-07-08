"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { getBackgroundColor } from "@/lib/constants";
import { Bell, ChevronDown, Search } from "lucide-react";
import Image from "next/image";

function Header() {
  const [level, setLevel] = useState<string | null>("");

  useEffect(() => {
    function getLevel() {
      setLevel(() => localStorage.getItem("subscriptionPlan"));
    }
    getLevel();
  }, []);

  return (
    <header className="border-b px-2 py-3 md:py-[22px]">
      <div className="flex items-center gap-4">
        <Button className={`capitalize ${getBackgroundColor(level!)}`}>
          {level} level <ChevronDown />
        </Button>
        <Search className="size-4.5" />
        <Bell className="size-4.5" />

        <div className="flex items-center gap-3 rounded-[1000px] border px-3 py-2">
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
