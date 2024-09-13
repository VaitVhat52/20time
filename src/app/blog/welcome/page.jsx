"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Markdown from "react-markdown";
import supabase from "../../../../utils/client";
import remarkGfm from 'remark-gfm'
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

Welcome to the Zacky blog! For my 20 time project, I will be creating an AI desktop assistant from scratch.

## Creating Zacky can be broken down into a few main steps:

### 1. Learn Programming Languages

In order to program the assistant, I will be using the Python programming language. I am somewhat familiar with it, but I will definitely need to refresh my skills to be able to complete this project.

I also need to learn the C++ language to program the Arduino micro-controller. I do not know C++, so I will need to gain a basic understanding of it in order to program the hardware for the assistant. Since the hardware portion of the project will not be too complicated, I will only need to get a grasp of the fundementals to complete the project.

### 2. Program the Assistant

To create the voice assistant, I will be using a Raspberry Pi computer to run a python program that takes a user's voice input, processes it, and returns an audio output. I will use the ChatGPT API to process the user's input and create the audio.

### 3. Hardware

This project will use the two boards pictured below:

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/LXp5snDF/IMG-0251.jpg" alt="my alt text"/>
    <figcaption>Raspberry Pi (Left) and Arduino (Right)</figcaption>
  </figure>
</center>

The Raspberry Pi will the brains of the assistant. Registering the user's voice input, AI response generation, and the assistant's audio output will all be done by running a program on the Pi. The Arduino will be used to control any hardware that will be used in the project, such as LED lights, motors, servos, etc. The two boards will be connected together via USB so that they can send signals to each other as needed.

## This Week

This week, I started refreshing myself on the Python programming language using a YouTube video course.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/y8RSY4K9/Screenshot-2024-09-10-191804.png" alt="my alt text"/>
    <figcaption>A simple python program</figcaption>
  </figure>
</center>

## Right Now

I am currently working on finishing the YouTube course so that I can be ready to start programming the assistant.

## Next Week

The goal for next week is to start using the ChatGPT API to start coding the AI part of the assistant. I will need to create a system that takes in a user's voice input, turns it into text, sends it to ChatGPT, and create an audio response for the user.

`

  return (
    <div className="flex flex-col mx-auto mb-14">
      <div className="mx-8 md:mx-[200px]">
        <p className="text-5xl font-semibold mt-10 md:mt-20 text-left">Welcome!</p>
        <p className="mt-3 mb-8">September 10, 2024</p>
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className="prose min-w-fit max-w-max">{body}</Markdown>
      </div>
    </div>
  );
};

export default page;
