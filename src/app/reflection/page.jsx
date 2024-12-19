"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const page = () => {
  // const [title, setTitle] = useState();
  // const [body, setBody] = useState();
  // const [dateData, setDateData] = useState();

  // const day = dateData?.getDate();
  // const month = dateData?.toLocaleString("default", { month: "long" });
  // const year = dateData?.getFullYear();
  // const date = month + " " + Number(day + 1) + ", " + year;

  // const params = useParams().id;

  // async function fetchBlogData() {
  //   const { data, error } = await supabase
  //     .from("blog")
  //     .select()
  //     .match({
  //       link: `${params}`,
  //     });
  //   setTitle(data[0]?.title);
  //   setBody(data[0]?.content);
  //   setDateData(new Date(`${data[0]?.created_at}`));

  //   error ? console.log(error) : null;
  // }

  // useEffect(() => {
  //   fetchBlogData();
  // }, []);

  const body = `
Maker electronics are a way for regular hobbyists to immerse themselves into the world of electronics by giving them the opportunity to make innovative and creative projects. This semester, I explored this word through my project Zacky, an AI-powered voice assistant. This project was a way for me to combine my interest in programming, electronics, and artificial intelligence.

Research for this project included everything that made up Zacky, an Arduino for the screen and LED, a Raspberry Pi 4 for processing, and OpenAI’s ChatGPT model. Using the information I gathered, I was able to understand how all of these tools worked and how to manipulate them so that I was able to create the voice assistant.

I structured my blog in a way that someone with basic to intermediate knowledge would be able to follow along and create and customize Zacky for themselves. Every time I finished a part of Zacky, I went and wrote about everything that went into creating that portion of the project. Writing about my work helped me reflect on my methods and problem-solving skills while also creating a space to share my progress with others.

The development phase had its fair share of challenges. Debugging code, fixing hardware connectivity, and ensuring smooth conversation were some of the main issues I encountered while working on this project. Through these challenges, however, I learned to approach problems through researching solutions online, testing smaller components individually, or reaching out to online forums for advice.

In conclusion, my work on Zacky reflects the possibilities that maker electronics provide. The researching, designing, coding, blogging, and testing, for this project has been a journey of growth. While there were many obstacles along the way, each challenge gave me an opportunity to learn and improve. Zacky is not just a voice assistant, it is a manifestation of my passion for innovation and creativity in the maker space.

`;

  return (
    <div className="flex flex-col md:mx-[10%] mb-14">
      <div className="mx-8 md:mx-[200px]">
        <p className="text-5xl font-semibold my-10 md:mt-20 text-left">
          Reflection
        </p>
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          className="prose min-w-fit max-w-max indent-8"
        >
          {body}
        </Markdown>
      </div>
    </div>
  );
};

export default page;
