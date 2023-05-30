import React from "react";

export default function Button({ children }) {
  return (
    <button className="bg-baby-blue p-2 rounded-sm outline outline-pastel-green w-52">
      {children}
    </button>
  );
}
