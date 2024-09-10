import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const BlogItem = (props) => {
  const dateInfo = new Date(`${props.date}`);
  const day = dateInfo.getDate();
  const month = dateInfo.toLocaleString("default", { month: "long" });
  const year = dateInfo.getFullYear();
  const date = month + " " + Number(day + 1) + ", " + year;

  return (
    <Card className="w-[350px] hover:scale-[101%] transition-all">
      <Image
        src={props.img}
        width={350}
        height={200}
        className="rounded-t-lg w-[350px] h-[200px] object-cover"
      />
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="truncate">{props.content}</p>
      </CardContent>
      <CardFooter>
        <Link href={`blog/${props.link}`}>
          <Button variant="">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogItem;
