import React from "react";

export default function Response({ value, title }) {
  console.log(value, title);
  return (
    <div className="flex gap-3">
      <input type="radio" value={value} id={title} />
      <label for={title}>{title}</label>
    </div>
  );
}
