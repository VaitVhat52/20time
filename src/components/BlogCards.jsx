"use client";

import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import supabase from "../../utils/client";

const BlogCards = () => {
  // const [blogData, setBlogData] = useState([]);

  // async function fetchBlogData() {
  //   const { data, error } = await supabase.from("blog").select();
  //   setBlogData(data);
  // }

  // useEffect(() => {
  //   fetchBlogData();
  // }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
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
        img={"https://i.postimg.cc/LXp5snDF/IMG-0251.jpg"}
        title={"Welcome!"}
        date={"September 10, 2024"}
        content={
          "Welcome to Zacky! For my 20 time project, I will be creating an AI desktop assistant from scratch."
        }
        link={"welcome"}
      />
      <BlogItem
        img={"https://i.postimg.cc/B6DLsvMS/Screenshot-2024-10-25-185119.png"}
        title={"Voice Assistant"}
        date={"October 10, 2024"}
        content={
          "This week, I completed the code that will be used to run the assistant. The code consists of a few parts that work together to make a complete voice assistant."
        }
        link={"voice"}
      />
      <BlogItem
        img={"https://i.postimg.cc/Y0ZF3sW-n/image.png"}
        title={"Board Connector"}
        date={"October 20, 2024"}
        content={
          "This week, using Fusion360, I designed and printed a part that would allow me to essentially combine both the Arduino and Raspberry Pi into a single board. This is necessary for the final build since it would help me save space and keep everything together."
        }
        link={"connector"}
      />
      <BlogItem
        img={"https://i.postimg.cc/MKMfG2PM/image.png"}
        title={"Housing"}
        date={"November 1, 2024"}
        content={
          "This week, I designed and 3D printed the housing for the voice assistant. This will keep all the components together and allow Zacky to become a single product. Creating the enclosure can be split into the following steps:"
        }
        link={"housing"}
      />
    </div>
  );
};

export default BlogCards;
