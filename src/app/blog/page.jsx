import BlogCards from "@/components/BlogCards";
import Link from "next/link";
import React from "react";

const blog = () => {
  return (
    <div className="w-full flex flex-col mt-10 md:mt-[150px] mb-10 items-center gap-10">
      <h2 className="text-4xl font-medium">Blog</h2>
      <BlogCards />
    </div>
  );
};

export default blog;
