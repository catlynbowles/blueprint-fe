import React from "react";
import Button from "./Button";

export default function Response({
  value,
  title,
  setResponseValue,
  responseValue,
}) {
  return (
    <Button>
      <button onClick={() => setResponseValue(value)}>{title}</button>
    </Button>
  );
}
