"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import SidebarLinks from "./SidebarLinks";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { RxCross1 } from "react-icons/rx";

const Sidebar = () => {
  const links = [
    { id: 0, text: "Home", link: "/" },
    { id: 1, text: "Blog", link: "/blog" },
    { id: 2, text: "Research", link: "/research" },
    { id: 3, text: "Reflection", link: "/reflection" },
  ];

  const pathname = usePathname();

  const [sidebar, setSidebar] = useState(true);

  function sidebarChange() {
    setSidebar(!sidebar);
  }

  return (
    <>
      <div className="md:hidden flex justify-between items-center bg-[#404040] text-white py-2 px-5">
        <div>
          <Link href={"/"} className="text-2xl">
            Zacky
          </Link>
        </div>
        <div>
          <RxHamburgerMenu size={25} onClick={sidebarChange} />
        </div>
      </div>

      <div
        className={`${
          sidebar ? "hidden" : ""
        } md:hidden absolute w-full h-full bg-[#404040]`}
      >
        <div className="flex h-full justify-center items-center">
          <div className="absolute top-3 right-5">
            <RxCross1
              size={25}
              onClick={sidebarChange}
              className="text-white"
            />
          </div>

          <ul>
            {links.map((link) => (
              <li
                key={link.id}
                className={`${
                  link.link == pathname ? "font-bold" : ""
                } pb-7 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
              >
                <Link
                  href={link.link}
                  className="text-white text-2xl"
                  onClick={sidebarChange}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center justify-between min-w-[250px] h-screen text-white bg-[#404040] pt-10 px-5 pb-2 sticky top-0 z-50">
        <Link href={"/"} className="pb-5 text-4xl font-semibold">
          ZACKY
        </Link>
        <Separator />
        <div className="flex flex-col justify-center h-full w-full">
          <div className="mx-auto">
            <ul>
              {links.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    link.link == pathname ? "font-bold" : ""
                  } pb-7 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
                >
                  <Link href={link.link}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-400">&copy; 2024 Hamza Makda</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
