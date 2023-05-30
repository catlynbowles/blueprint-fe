import React from "react";

export default function DialogBox({ children }) {
  return (
    <div className="bg-blue outline outline-eggshell h-96 w-[50%] flex justify-center items-center rounded-md">
      {children}
    </div>
  );
}
