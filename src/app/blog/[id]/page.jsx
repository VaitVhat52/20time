"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import supabase from "../../../../utils/client";

const page = (params) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const url = useParams().id;

  async function fetchBlogData() {
    const { data, error } = await supabase
      .from("blog")
      .select()
      .match({
        link: `${url}`,
      });
    setTitle(data[0]?.title);
    setBody(data[0]?.content);
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <div>
      <div>{title}</div>
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
};

export default page;
