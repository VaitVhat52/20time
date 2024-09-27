import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Markdown from "react-markdown";

const research = () => {
  const research1 = `
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio voluptates minus provident consectetur voluptatem, explicabo harum beatae, aliquid fuga amet natus quos ipsam eveniet illum. Quis similique provident esse nobis?
  
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, fuga odio reprehenderit unde animi modi ullam fugiat. Itaque, minus fugit labore adipisci nulla, autem earum, perspiciatis ea et dolorem veniam!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit amet harum similique dolorum ipsum unde excepturi porro ea quod natus accusamus ipsa libero, aliquam ipsam dolorem repellendus incidunt quis?

  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, enim voluptatum blanditiis natus modi officiis magnam. Beatae, fuga, quibusdam autem non ex dolorem tempora iste ad facere, ea incidunt deleniti.

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
          <h2 className="font-serif text-4xl pb-8">
            What is an Arduino and how does it work?
          </h2>
          <Markdown className="font-serif prose indent-8">{research1}</Markdown>
        </TabsContent>
        <TabsContent value="2">
          <h2 className="font-serif text-4xl pb-8">
            Research Paper 2 Coming Soon!
          </h2>
          <Markdown className="font-serif prose indent-8">{research1}</Markdown>
        </TabsContent>
        <TabsContent value="3">
          <h2 className="font-serif text-4xl pb-8">
            Research Paper 3 Coming Soon!
          </h2>
          <Markdown className="font-serif prose indent-8">{research1}</Markdown>
        </TabsContent>
        <TabsContent value="4">
          <h2 className="font-serif text-4xl pb-8">
            Research Paper 4 Coming Soon!
          </h2>
          <Markdown className="font-serif prose indent-8">{research1}</Markdown>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default research;
