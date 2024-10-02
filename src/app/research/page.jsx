import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Markdown from "react-markdown";

const research = () => {
  const research1 = `
  Research 1

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolor, temporibus animi pariatur necessitatibus repellat porro iure suscipit, facilis debitis dolorem commodi inventore rerum quod praesentium laborum repellendus excepturi explicabo!

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio qui quisquam, repudiandae officia itaque perferendis, commodi illum a nam consequatur distinctio soluta, excepturi vero eveniet dolorem tempora blanditiis laborum minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, pariatur eius? Cumque, officia aperiam incidunt velit blanditiis vitae exercitationem similique quisquam. Exercitationem in et laborum perferendis ad eos rerum aliquam.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut architecto consequuntur. Exercitationem, deleniti. Cupiditate aliquam minus voluptates, illum aperiam a, fugiat facere quidem quaerat adipisci aspernatur dolorem, quia autem? 
  
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita eaque accusantium quibusdam eius molestiae non repellendus error repellat totam quas, cum reprehenderit, laudantium molestias porro aliquid soluta perferendis dicta.
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
          <Markdown className="font-serif prose indent-8 mx-auto">
            {research1}
          </Markdown>
        </TabsContent>
        <TabsContent value="2">
          <h2 className="font-serif text-4xl pb-8 text-center">
            Research Paper 2 Coming Soon!
          </h2>
          <Markdown className="font-serif prose indent-8 mx-auto">
            {research2}
          </Markdown>
        </TabsContent>
        <TabsContent value="3">
          <h2 className="font-serif text-4xl pb-8 text-center">
            Research Paper 3 Coming Soon!
          </h2>
          <Markdown className="font-serif prose indent-8 mx-auto">
            {research3}
          </Markdown>
        </TabsContent>
        <TabsContent value="4">
          <h2 className="font-serif text-4xl pb-8 text-center">
            Research Paper 4 Coming Soon!
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
          <Markdown className="font-serif prose indent-8 mx-auto">
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
