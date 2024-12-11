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

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/Dy4hJ4j2/image.png " alt="my alt text"/>
    <figcaption></figcaption>
  </figure>
</center>

## This Week

This week, I programmed the Arduino to accomplish 2 tasks: work the OLED screen and run the LED indicator light.

To understand how the code works, it is important to understand the basic setup of an Arduino script:

There are 2 mandatory functions, setup and loop. The setup function will run once at the beginning of the script, and the loop function will do what the name suggests; loop infinitely until the script is told to stop running. 

For Zacky, the setup function initializes the robotEyes library, which is used to create the animated eyes on the OLED screen. It is also used to configure the eyes which will be displayed. I set the height, width, border, border radius, and the space between the two eyes. I also told the library to make sure the eyes blink at random intervals.

\`\`\`
 void setup() {
  roboEyes.begin(SCREEN_WIDTH, SCREEN_HEIGHT, 100);

  roboEyes.setAutoblinker(ON, 3, 2); 
  roboEyes.setIdleMode(ON, 2, 2); 
  
  roboEyes.setWidth(36, 36); 
  roboEyes.setHeight(36, 36); 
  roboEyes.setBorderradius(8, 8); 
  roboEyes.setSpacebetween(10); 
}
\`\`\`

The loop function only consists of 2 functions. The first function is roboEyes.update(), which uses the settings configured in the setup function and animates the eyes for the assistant.

\`\`\`
void loop() {
  roboEyes.update();
  LED();
}
\`\`\`

The LED() function makes the indicator LED fade in and out. The LED currently does not correspond to any actions, but can be programmed to respond to certain events from the assistant.

\`\`\`
void LED() {
  analogWrite(led, brightness);
  brightness = brightness + fadeAmount;

    if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  delay(30);
}
\`\`\`

## Right Now

Currently, I am refining the code for the Arduno by making small adjustments to make sure everything looks and runs smoothly.

## Next Week

Now that all the parts for Zacky are done, I will be putting everything together in order to complete the voice assistant.

`;

  return (
    <div className="flex flex-col mx-auto mb-14">
      <div className="mx-8 md:mx-[200px]">
        <p className="text-5xl font-semibold mt-10 md:mt-20 text-left">
          Arduino Programming
        </p>
        <p className="mt-3 mb-8">November 12, 2024</p>
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
