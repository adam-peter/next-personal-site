import React from "react";

import Link from "next/link";
import ClientSideButton from "./ClientSideButton";

const Contact = () => {
  return (
    <div>
      <h1>Contact page</h1>
      {/* navigation */}
      <Link href="/">Home</Link>
      {/* dynamic navigation */}
      <Link href={`/blog/${"asdfasdf"}`}>Blog Post</Link>
      {/* client-side navigation (must declare "use client") */}
      <ClientSideButton />
    </div>
  );
};

export default Contact;
