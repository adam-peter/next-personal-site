import React from "react";
import delay from "@/lib/delay";

type BlogPostType = {
  params: any;
}

const getData = async (postId: string) => {
  const post = await delay(5000);
  return {
    title: "Title",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi vel ad nulla eveniet aperiam sed tempore! Quidem earum nobis aspernatur facilis amet facere, autem, tempora, corporis similique veniam ab ut.",
    postId: postId,
  };
};

const BlogPost: React.FC<BlogPostType> = async ({ params }) => {
  const { postId } = params;
  const post = await getData(postId);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.postId}</p>
    </div>
  );
};

export default BlogPost;
