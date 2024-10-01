import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Markdown from "react-markdown";

const research = () => {
  const research1 = `
  Research 1
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
    <div className="flex mx-auto mt-20 mb-8">
      <Tabs defaultValue="1">
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
    </div>
  );
};

export default research;
