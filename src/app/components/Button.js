import React from "react";

export default function Button({ children }) {
  return (
    <button className="bg-indigo p-2 rounded-lg w-56 text-off-white outline outline-gray font-bold">
      {children}
    </button>
  );
}
