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
The Raspberry Pi is a compact and low-cost computer developed by the Raspberry Pi Foundation. It was originally designed to promote computer science education, and it has evolved into a versatile platform used in a wide range of applications, from basic programming projects to advanced industrial automation.

The Raspberry Pi integrates key computer components on a single board. These include a processor, RAM, GPIO (General Purpose Input/Output) pins, USB ports, HDMI ports, and sometimes onboard Wi-Fi and Bluetooth. It uses ARM-based processors, similar to those found in smartphones, and runs on a microSD card as its primary storage. The Raspberry Pi foundation also offers different models, such as the Raspberry Pi 4 and Raspberry Pi Zero, which vary in performance, size, and connectivity.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/25WFDRpm/616-RFn6-Jv5-L-AC-UF894-1000-QL80.jpg" alt="my alt text"/>
  </figure>
</center>

The Raspberry Pi is designed to be a flexible computer. It is able to connect to peripherals like keyboards, mice, and monitors, enabling users to code, browse the internet, or perform other computing tasks. The GPIO pins allow interaction with external hardware, making it ideal for robotics, home automation, and more.

The Raspberry Pi primarily runs on Raspberry Pi OS (formerly called Raspbian), which is a Linux-based operating system optimized for the board. It also supports various other operating systems like Ubuntu, Windows, and other specialized systems for more niche projects.

To use it, the Raspberry Pi requires power via a micro-USB or USB-C cable and a microSD card that contains an operating system. Once powered on, it boots into the OS, providing a platform to write programs or interact with external devices. Its simplicity and extensive community support make it accessible to both beginners and professionals.

With its affordability and adaptability, the Raspberry Pi has become a way for beginners to dive into the world of electronics and professionals to propel themselves into the furniture of technology.
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
          <Markdown
            className="font-serif prose indent-8 mx-auto"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
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
