"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import supabase from "../../../../utils/client";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import BlogItem from "@/components/BlogItem";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const newPost = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const currentDate = `${year}-${month}-${day}`;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [link, setLink] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const blogPassword = process.env.NEXT_PUBLIC_PASSWORD;

  const router = useRouter();

  const { toast } = useToast();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password === blogPassword) {
      const { error } = await supabase.from("blog").insert({
        title: title,
        content: body,
        image_link: imgLink,
        created_at: currentDate,
        link: link,
      });

      if (!error) {
        router.push("/blog");
        toast({
          title: "Success!",
          description: "Blog post was created successfully.",
          variant: "success",
        });
      } else if (error) {
        toast({
          title: "Error creating blog post.",
          variant: "destructive",
          description: `Error ${error.code}: ${error.message}`,
        });
      }
    } else {
      setError(true);
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="max-w-max min-w-[1200px]">
        <form
          className="flex flex-col gap-5 mx-[200px] mt-5"
          onSubmit={handleSubmit}
        >
          <div className="grid w-full gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              type="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full"
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="Body">Body</Label>
            <Textarea
              placeholder="Type your body here."
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="title">Image Link</Label>
            <Input
              type="title"
              id="image"
              value={imgLink}
              onChange={(e) => setImgLink(e.target.value)}
              placeholder="Image Link"
              className="w-full"
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="link">Link</Label>
            <Input
              type="link"
              id="link"
              placeholder="Link"
              className="w-full"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <p className="text-sm text-gray-500">
              The URL to this blog post will be: 20time.vercel.app/blog/{link}
            </p>
          </div>
          <div className="grid w-full gap-1.5">
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Blog Password"
              className="w-full"
            />
            <p className={`text-sm text-red-700 ${error ? "block" : "hidden"}`}>
              Password is incorrect.
            </p>
          </div>
          <Button type="submit">Create Post</Button>
        </form>
      </div>
      <div className="w-full flex justify-center mt-3 hover:underline">
        <Dialog>
          <DialogTrigger className='mt-5'>View Card Preview</DialogTrigger>
          <DialogContent>
            <div className="w-full flex justify-center items-center">
              <BlogItem
                img={imgLink}
                title={title}
                date={currentDate}
                content={body}
                link={"new"}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default newPost;
