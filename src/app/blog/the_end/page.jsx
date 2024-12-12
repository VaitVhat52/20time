"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Markdown from "react-markdown";
import supabase from "../../../../utils/client";
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

## This Week

After having completed all the programming and 3D printing, all that’s left to do is put it all together!

First, I superglued the magnets into the holes in the housing and lid, making sure that the polarities are opposite each other in the two pieces.

Next, I after loading the script onto the Arduino, I wired everything as shown:

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/zfgpT8mH/image.png " alt="my alt text"/>
  </figure>
</center>

Once that was done, I placed the speaker into its area and slid the OLED screen into place as well.

Zacky is finished! I’m so excited to be able to show a finished product after working on this project for the entire semester. I have gained many skills such as 3D modeling, computer programming, and more that I will be able to use in the future with my career as an engineer.

## Right Now
Here’s the finished Zacky:

<a href='https://youtube.com/shorts/pzv5l3ANCUw?feature=share '>Video Demo</a>

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/66n3gSKV/IMG-0212.jpg" alt="my alt text"/>
  </figure>
</center>

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/505hqwcz/IMG-0601.jpg" alt="my alt text"/>
  </figure>
</center>


`;

  return (
    <div className="flex flex-col mx-auto mb-14">
      <div className="mx-8 md:mx-[200px]">
        <p className="text-5xl font-semibold mt-10 md:mt-20 text-left">
          Putting it All Together
        </p>
        <p className="mt-3 mb-8">November 16, 2024</p>
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          className="prose min-w-fit max-w-max"
        >
          {body}
        </Markdown>
      </div>
    </div>
  );
};

export default page;
