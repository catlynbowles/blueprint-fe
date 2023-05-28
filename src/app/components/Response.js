import React from "react";

export default function Response({ value, title, setResponseValue, responseValue }) {
  return (
      <button onClick={() => setResponseValue(value)}>{title}</button>
  );
}
