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
A 3D printer is able to create physical objects by building them layer by layer in a process known as additive manufacturing. It begins with a 3D design, usually created using a computer-aided design (CAD) software. This design is saved as a file, typically in formats like STL or OBJ, which define how the object looks in a 3D dimensional space. To prepare for printing, the file is then processed using slicing software, which divides the design into horizontal layers and generates a set of instructions, called “gcode”, that guide the printer's movements during the print.

During the printing process, the type of 3D printing technology determines how the object is created. One of the most common methods is Fused Deposition Modeling (FDM), where a filament made of plastic is heated and pushed through a small nozzle. The nozzle moves precisely, placing material layer by layer to build the object. In another method, Stereolithography (SLA), liquid resin is hardened by an ultraviolet light to form layers. Selective Laser Sintering (SLS) uses a laser to fuse powdered material, creating objects that have greater strength, as they can be created out of metal infused powders. Once the object is printed, it may require post-processing steps such as removing support structures, curing to enhance durability, or other finishing steps like sanding or painting. This makes the final product ready for its intended use.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/rwyRY3Tn/original-prusa-mk4-3d-printer-image8-800x600.jpg" alt="my alt text"/>
    <figcaption>An FDM 3D Printer</figcaption>
  </figure>
</center>

3D printing has revolutionized the world by enabling the rapid and cost-effective production of prototypes, tools, and products. It can be used in many fields such as healthcare to produce medical implants, in architecture for creating models, and in manufacturing for custom prototypes. The ability to turn digital designs into tangible objects with high precision has allowed for innovation, making 3D printing an important aspect of modern engineering and design.
  `;

  const research4 = `
ChatGPT answers questions by using machine learning and a great amount of training data. It is based on a type of architecture called a transformer, specifically the Generative Pre-trained Transformer (GPT), which is designed to generate human-like text in response to input.

The process begins with the input, where a user types a question or prompt. This text is tokenized, meaning it is broken down into smaller units such as words or even subwords. Each token is assigned a number to represent it that allows the model to process the input mathematically. Using its pre-trained parameters, ChatGPT analyzes the context of the input, identifying relationships between words and phrases to understand what the user is trying to tell it.

<center>
  <figure>
    <!-- IMAGE DIMENSIONS: 687px x 515px -->
    <img src="https://i.postimg.cc/MZycZqK3/1-y-M5gg3c-PHDvo7-AAq-DZry-ZA.png" alt="my alt text"/>
  </figure>
</center>

The model’s training is incredibly important in its ability to answer questions. It has been exposed to vast amounts of text data from books, articles, websites, and more, enabling it to learn human language patterns, grammar, and factual information. This training allows ChatGPT to predict the next most likely token (word) in a sequence, enabling it to generate coherent and contextually relevant responses.

When generating an answer, ChatGPT evaluates the input using the many layers of its neural network, each layer refining its understanding of the context. It looks not only at the immediate question but also any prior conversation history to maintain relevance throughout the conversation with the user. The model uses probability-based decision-making to construct a response, while striving for clarity and accuracy.

Despite its capabilities, ChatGPT still has its limitations. It lacks true understanding or consciousness and can sometimes produce incorrect or nonsensical answers if the input is ambiguous or outside the scope of the training information. However, its design allows it to mimic human-like conversation effectively, providing users with informative and contextually appropriate responses to their questions.
  `;

  const worksCited = `
  <center>
    <a href='https://docs.google.com/document/d/17Wp3Ou0N0dOWaiwkErVvvlHe8fhpP3luOBLna3E77wA/edit?usp=sharing' target="_blank"> Click here to view the works cited page. </a>
  </center>
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
          <Separator orientation="vertical" />
          <TabsTrigger value="5">Works Cited</TabsTrigger>
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
          <Markdown
            className="font-serif prose indent-8 mx-auto"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {research3}
          </Markdown>
        </TabsContent>
        <TabsContent value="4">
          <h2 className="font-serif text-4xl pb-8 text-center">
            How does ChatGPT answer a question?
          </h2>
          <Markdown
            className="font-serif prose indent-8 mx-auto"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {research4}
          </Markdown>
        </TabsContent>
        <TabsContent value="5">
          <h2 className="font-serif text-4xl pb-8 text-center">Works Cited</h2>
          <Markdown
            className="font-serif prose indent-8 mx-auto"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {worksCited}
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
          <Separator orientation="vertical" />
          <TabsTrigger value="5">WC</TabsTrigger>
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
          <h2 className="font-serif text-2xl pb-8 text-center text-pretty">
            How does a 3D printer work?
          </h2>
          <Markdown
            className="font-serif prose indent-8 mx-auto"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {research3}
          </Markdown>
        </TabsContent>
        <TabsContent value="4">
          <h2 className="font-serif text-2xl pb-8 text-center text-pretty">
            How does ChatGPT answer a question?
          </h2>
          <Markdown
            className="font-serif prose indent-8 mx-auto"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {research4}
          </Markdown>
        </TabsContent>
        <TabsContent value="5">
          <h2 className="font-serif text-2xl pb-8 text-center text-pretty">
            Works Cited
          </h2>
          <Markdown
            className="font-serif prose indent-8 mx-auto"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {worksCited}
          </Markdown>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default research;
