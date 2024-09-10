"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Markdown from "react-markdown";
import supabase from "../../../../utils/client";

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
  
## Project Outline

Creating Zacky can be broken down into a few main steps:

### 1. Learn Programming Languages

In order to program the assistant, I will be using the Python programming language. I am somewhat familiar with it, but I will definitely need to refresh my skills to be able to complete this project.

I also need to learn the C++ language to program the Arduino micro-controller. I do not know C++, so I will need to gain a basic understanding of it in order to program the hardware for the assistant. Since the hardware portion of the project will not be too complicated, I will only need to get a grasp of the fundementals to complete the project.

### 2. Program the Assistant

To create the voice assistant, I will be using a Raspberry Pi computer to run a python program that takes a user's voice input, processes it, and returns an audio output. I will use the ChatGPT API to process the user's input and create the audio.

### 3. Hardware

Zacky will 

## This Week

## Right Now

## Next Week`

  return (
    <div className="flex flex-col mx-auto mb-8">
      <div className="mx-[200px]">
        <p className="text-5xl font-semibold mt-32 text-left">Welcome!</p>
        <p className="mt-3 mb-8">September 10, 2024</p>
        <Markdown className="prose min-w-fit max-w-max">{body}</Markdown>
      </div>
    </div>
  );
};

export default page;
