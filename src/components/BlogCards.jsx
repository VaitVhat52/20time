"use client";

import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import supabase from "../../utils/client";

const BlogCards = () => {
  const [blogData, setBlogData] = useState([]);

  async function fetchBlogData() {
    const { data, error } = await supabase.from("blog").select();
    setBlogData(data);
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-7">
      {/* {blogData?.map((blogData) => (
        <BlogItem
          key={blogData.id}
          img={blogData.image_link}
          title={blogData.title}
          date={blogData.created_at}
          content={blogData.content}
          link={blogData.link}
        />
      ))} */}
      <BlogItem
        img={"/herobg.jpg"}
        title={"Welcome!"}
        date={"September 10, 2024"}
        content={"Creating Zacky can be broken down into a few main steps:"}
        link={"welcome"}
      />
    </div>
  );
};

export default BlogCards;
