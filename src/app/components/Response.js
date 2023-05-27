import React from "react";

export default function Response({ value, title, setResponseValue, responseValue }) {
  return (
    <div className="flex gap-3">
      <input type="radio" value={value} id={title} name="response" checked={responseValue === value} onChange={() => setResponseValue(value)} required/>
      <label>{title}</label>
    </div>
  );
}
