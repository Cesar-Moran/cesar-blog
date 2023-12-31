import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

type Post = {
  id: string;
  title: string;
  short_description: string;
  description: string;
  tags: string[];
  imageUrl: string;
};

export const SinglePostPage = () => {
  const [post, setPost] = useState<Post | null>(null);

  const { id } = useParams();

  const getPostProperties = async () => {
    const response = await fetch(
      `http://localhost:4000/api/getSinglePostProperties/${id}`
    );

    const data = await response.json();

    setPost(data);
  };

  useEffect(() => {
    getPostProperties();
  }, [id]);

  return (
    <section className="min-h-screen flex justify-center py-28 mx-auto">
      <div className="single-post">
        {post && post.description && (
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {post.description}
          </ReactMarkdown>
        )}
      </div>
    </section>
  );
};
