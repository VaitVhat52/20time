"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const SidebarLinks = () => {
  const links = [
    { id: 0, text: "Home", link: "/" },
    { id: 1, text: "Blog", link: "/blog" },
    { id: 2, text: "Research", link: "/research" },
    { id: 3, text: "Reflection", link: "/reflection" },
  ];

  const pathname = usePathname();

  return (
    <div className="mx-auto">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`${
              link.link == pathname ? "font-bold" : ""
            } pb-5 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`}
          >
            <Link href={link.link}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarLinks;
