"use client"

import React from "react";

type ErrorType = {
  error: Error;
}

const Error: React.FC<ErrorType> = ({error}) => {
  return (
    <div>
      ...error! 😀
      {error.message}
    </div>
  )
}

export default Error
