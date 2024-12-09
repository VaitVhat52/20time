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

This week, using Fusion360, I designed and printed a part that would allow me to essentially combine both the Arduino and Raspberry Pi into a single board. This is necessary for the final build since it would help me save space and keep everything together.

Firstly, I imported 3D models for the Raspberry Pi and the Arduino, so that I could model the part around the two boards to ensure that they fit.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/Y0ZF3sWn/image.png " alt="my alt text"/>
    <figcaption></figcaption>
  </figure>
</center>

Next, I created the base of the connector by making a platform which fits onto the pins of the Raspberry Pi.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/FHtckwm1/image.png" alt="my alt text"/>
    <figcaption></figcaption>
  </figure>
</center>

Using the Arduino model as reference, I created pegs which allows the Arduino to fit onto the connector piece.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/QMmWPt7W/image.png" alt="my alt text"/>
    <figcaption></figcaption>
  </figure>
</center>

Now, for the exciting part! I loaded the completed 3D model into a slicing software, and sent it to my 3D printer, which created the physical part.

<center>
  <figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/c--dYCIlNTo?si=NGyaT4KKLbDFehzp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </figure>
</center>

Here’s a video demonstrating how all the parts fit together:

<center>
  <figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/u3qTrCgSWmA?si=tGCII4UhucNUO9Ob" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </figure>
</center>

## Right Now

Now that the connector piece is done, it is time to start planning how the actual assistant will look like. I plan on creating a simple enclosure that incorporates a speaker, microphone, OLED screen, and LED light. Similar to the connector, I will model and 3D print these to create the final product.

## Next Week

Next week, I will model and print the housing for Zacky and put it all together.

`;

  return (
    <div className="flex flex-col mx-auto mb-14">
      <div className="mx-8 md:mx-[200px]">
        <p className="text-5xl font-semibold mt-10 md:mt-20 text-left">
          Board Connector
        </p>
        <p className="mt-3 mb-8">October 20, 2024</p>
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
