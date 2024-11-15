import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const research = () => {
  const research1 = `

 Arduino is an open-source electronics platform focused on hardware, designed to make it easy for anyone to create interactive projects. It was created at the Ivrea Interaction Design Institute as a way for anyone, regardless of their background, to get introduced to the world of electronics. Since it is open source, many variations exist. At its core, however, it typically features a microcontroller, which is a programmable chip that can be instructed to perform a variety of tasks. Common models include the Arduino Uno, Mega, and Nano, each offering different sizes, processing power, and input/output capabilities.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/qMYfTMfc/image.png" style="height:350px;" alt="my alt text"/>
  </figure>
</center>

 Using the Arduino is incredibly straightforward, thanks to the easy-to-use development environment. There is an almost infinite amount of resources online which teach users about the Arduino and how to implement different components such as LEDs, buttons, switches, etc . The software used to program the Arduino uses a simplified version of the C/C++ programming language. Once the user uploads the code via USB, the microcontroller runs the code in a loop, continuously checking for inputs and executing commands based on those inputs. The software is also cross-platform, allowing anyone to use it regardless of what operating system they have.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/cJSbxvF3/image.png" alt="my alt text"/>
    <figcaption>The Arduino IDE</figcaption>
  </figure>
</center>

 Moreover, the Arduino community has created a vast ecosystem of libraries and resources, making it easy for both beginners and advanced developers to share ideas and projects. The abundance of tutorials, forums, and open-source projects fosters an environment filled with collaboration and innovation. This accelerates learning and innovation, allowing users to experiment with new ideas and applications.
 
 In summary, Arduino is more than just a tool; it's a way for people to understand electronics and programming. Its combination of accessible hardware and software empowers people to bring their ideas to life, making it an important resource in the world of DIY electronics and education.
 `;

  const research2 = `
  Research 2
  `;

  const research3 = `
  Research 3
  `;

  const research4 = `
  Research 4
  `;

  return (
    <div className="flex mx-auto mt-10 md:mt-20 mb-8">
      <Tabs className="hidden md:block" defaultValue="1">
        <TabsList className="gap-5 mb-8">
          <TabsTrigger value="1">Research Paper 1</TabsTrigger>
          <Separator orientation="vertical" />
          <TabsTrigger value="2">Research Paper 2</TabsTrigger>
          <Separator orientation="vertical" />
          <TabsTrigger value="3">Research Paper 3</TabsTrigger>
          <Separator orientation="vertical" />
          <TabsTrigger value="4">Research Paper 4</TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <h2 className="font-serif text-4xl pb-8 text-center">
            What is an Arduino and how does it work?
          </h2>
          <Markdown
            className="font-serif prose indent-8 mx-auto"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {research1}
          </Markdown>
        </TabsContent>
        <TabsContent value="2">
          <h2 className="font-serif text-4xl pb-8 text-center">
            What is a Raspberry Pi and how does it work?
          </h2>
          <Markdown className="font-serif prose indent-8 mx-auto">
            {research2}
          </Markdown>
        </TabsContent>
        <TabsContent value="3">
          <h2 className="font-serif text-4xl pb-8 text-center">
            How does a 3D printer work?
          </h2>
          <Markdown className="font-serif prose indent-8 mx-auto">
            {research3}
          </Markdown>
        </TabsContent>
        <TabsContent value="4">
          <h2 className="font-serif text-4xl pb-8 text-center">
            How does ChatGPT answer a question?
          </h2>
          <Markdown className="font-serif prose indent-8 mx-auto">
            {research4}
          </Markdown>
        </TabsContent>
      </Tabs>
      <Tabs className="block md:hidden mx-5" defaultValue="1">
        <TabsList className="gap-5 mb-8 mx-auto w-full">
          <TabsTrigger value="1">1</TabsTrigger>
          <Separator orientation="vertical" />
          <TabsTrigger value="2">2</TabsTrigger>
          <Separator orientation="vertical" />
          <TabsTrigger value="3">3</TabsTrigger>
          <Separator orientation="vertical" />
          <TabsTrigger value="4">4</TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <h2 className="font-serif text-2xl pb-8 text-center text-pretty">
            What is an Arduino and how does it work?
          </h2>
          <Markdown
            className="font-serif prose indent-8 mx-auto"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {research1}
          </Markdown>
        </TabsContent>
        <TabsContent value="2">
          <h2 className="font-serif text-2xl pb-8 text-center text-pretty">
            Research Paper 2 Coming Soon!
          </h2>
          <Markdown className="font-serif prose indent-8 mx-auto">
            {research2}
          </Markdown>
        </TabsContent>
        <TabsContent value="3">
          <h2 className="font-serif text-2xl pb-8 text-center text-pretty">
            Research Paper 3 Coming Soon!
          </h2>
          <Markdown className="font-serif prose indent-8 mx-auto">
            {research3}
          </Markdown>
        </TabsContent>
        <TabsContent value="4">
          <h2 className="font-serif text-2xl pb-8 text-center text-pretty">
            Research Paper 4 Coming Soon!
          </h2>
          <Markdown className="font-serif prose indent-8 mx-auto">
            {research4}
          </Markdown>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default research;
