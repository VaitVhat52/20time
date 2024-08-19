import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Markdown from "react-markdown";

const research = () => {
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
          <Markdown className="font-serif text-center text-4xl">
            Research Paper 1 Coming Soon!
          </Markdown>
        </TabsContent>
        <TabsContent value="2">
          <Markdown className="font-serif text-center text-4xl">
            Research Paper 2 Coming Soon!
          </Markdown>
        </TabsContent>
        <TabsContent value="3">
          <Markdown className="font-serif text-center text-4xl">
            Research Paper 3 Coming Soon!
          </Markdown>
        </TabsContent>
        <TabsContent value="4">
          <Markdown className="font-serif text-center text-4xl">
            Research Paper 4 Coming Soon!
          </Markdown>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default research;
