import React from "react";

export default function DialogBox({ children }) {
  return (
    <div className="bg-blue outline outline-eggshell aspect-[3/2] w-[50%] flex rounded-md p-5 m-5 ">
      {children}
    </div>
  );
}
