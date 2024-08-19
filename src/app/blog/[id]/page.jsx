"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Markdown from "react-markdown";
import supabase from "../../../../utils/client";

const page = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [dateData, setDateData] = useState();

  const day = dateData?.getDate();
  const month = dateData?.toLocaleString("default", { month: "long" });
  const year = dateData?.getFullYear();
  const date = month + " " + Number(day + 1) + ", " + year;

  const params = useParams().id;

  async function fetchBlogData() {
    const { data, error } = await supabase
      .from("blog")
      .select()
      .match({
        link: `${params}`,
      });
    setTitle(data[0]?.title);
    setBody(data[0]?.content);
    setDateData(new Date(`${data[0]?.created_at}`));

    error ? console.log(error) : null;
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div className="flex flex-col mx-auto mb-8">
      <div className="mx-[200px]">
        <p className="text-5xl font-semibold mt-32 text-left">{title}</p>
        <p className="mt-3 mb-8">{date}</p>
        <Markdown className="prose min-w-fit max-w-max">{body}</Markdown>
      </div>
    </div>
  );
};

export default page;
