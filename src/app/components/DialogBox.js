import React from "react";

export default function DialogBox({ children }) {
  return (
    <div className="bg-off-white outline outline-gray aspect-[3/2] max-xl:w-[80%] w-[50%] flex rounded-md p-5 m-5 items-center justify-center max-sm:w-[75%] max-md:m-5 max-md:aspect-[3/5]">
      {children}
    </div>
  );
}
