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

This week, I designed and 3D printed the housing for the voice assistant. This will keep all the components together and allow Zacky to become a single product. Creating the enclosure can be split into the following steps:

First, I imported the models for the mic and speaker combo and the OLED screen into Fusion360.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/J4ydx0nT/image.png" alt="my alt text"/>
    <figcaption></figcaption>
  </figure>
</center>

Then, I positioned the two parts and created a box that would hold them in position.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/X7yQFPHm/image.png" alt="my alt text"/>
    <figcaption></figcaption>
  </figure>
</center>

Next, I imported the combined model for the Raspberry Pi and Arduino and placed it on the back of the box I already created. Then, I created another box around the boards to hold everything inside the assistant.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/MTMdDrZn/image.png" alt="my alt text"/>
    <figcaption></figcaption>
  </figure>
</center>

For the microphone to pick up sound, there has to be a hole in the front for the sound to travel through. To combat this problem, I opted to make a honeycomb grill in the front so that sound could still pass through, while keeping the aesthetics of the assistant.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/YShyjSFK/image.png" alt="my alt text"/>
    <figcaption></figcaption>
  </figure>
</center>

In order to connect the top of the assistant to the bottom, I will use small disk magnets to attach the two pieces. For that, I created 4 channels which would allow me to insert magnets to bring the top and bottom pieces together. 

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/MKMfG2PM/image.png " alt="my alt text"/>
    <figcaption></figcaption>
  </figure>
</center>

Now, for the top piece. This is much simpler since it is basically a mirror of what I have already created.

First, I imported the base of the assistant and created a box on top of it.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/xCPjCgH4/image.png " alt="my alt text"/>
    <figcaption></figcaption>
  </figure>
</center>

After closing the top of the lid, I put the same honeycomb pattern that I put on the front of the assistant.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/X7tWntmv/image.png  " alt="my alt text"/>
    <figcaption></figcaption>
  </figure>
</center>

Next, I created a hole with space to fit an LED light so that I could use it as an indicator light for the assistant.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/VN8cCnYQ/image.png   " alt="my alt text"/>
    <figcaption></figcaption>
  </figure>
</center>

Finally, I modeled the channels for the magnets in the same place as the base so that the two pieces are able to connect magnetically.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/Twb7qHQt/image.png" alt="my alt text"/>
    <figcaption></figcaption>
  </figure>
</center>

## Right Now

Now, I am currently 3D printing both of the parts so that I can put the assistant together.

## Next Week

Now that the housing for the assistant is done, I have to program and wire the Arduino in order to get the OLED screen and LED working.

`;

  return (
    <div className="flex flex-col mx-auto mb-14">
      <div className="mx-8 md:mx-[200px]">
        <p className="text-5xl font-semibold mt-10 md:mt-20 text-left">
          Housing
        </p>
        <p className="mt-3 mb-8">November 1, 2024</p>
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
