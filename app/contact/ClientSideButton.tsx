"use client";

import React from "react";

import { useRouter } from "next/navigation";

const ClientSideButton = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/blog/asdf/fdsa")}>
        Dynamic blog post
      </button>
    </div>
  );
};

export default ClientSideButton;
