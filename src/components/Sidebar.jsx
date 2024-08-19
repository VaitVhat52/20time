import Link from "next/link";
import React from "react";
import { Separator } from "@/components/ui/separator";
import SidebarLinks from "./SidebarLinks";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between min-w-[280px] h-screen text-white bg-[#404040] pt-10 px-5 pb-2 sticky top-0 z-50">
      <Link href={"/"} className="pb-5 text-4xl font-semibold">
        NAME
      </Link>
      <Separator />
      <div className="flex flex-col justify-center h-full w-full">
        <SidebarLinks />
      </div>
      <div>
        <p className="text-xs text-gray-400">&copy; 2024 Hamza Makda</p>
      </div>
    </div>
  );
};

export default Sidebar;
