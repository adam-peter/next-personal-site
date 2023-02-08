"use client";
import React from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Contact page</h1>
      {/* navigation */}
      <Link href="/">Home</Link>
      {/* dynamic navigation */}
      <Link href={`/blog/${"asdfasdf"}`}>Blog Post</Link>
      {/* client-side navigation (must declare "use client") */}
      <button onClick={() => router.push("/blog/asdf/fdsa")}>Dynamic blog post</button>
    </div>
  );
};

export default Contact;
