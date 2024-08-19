import BlogCards from "@/components/BlogCards";
import BlogItem from "@/components/BlogItem";
import React from "react";

const blog = () => {
  return (
    <div className="w-full flex flex-col mt-[150px] items-center gap-10">
      <h2 className="text-4xl font-medium">Blog</h2>
      <BlogCards />
    </div>
  );
};

export default blog;
