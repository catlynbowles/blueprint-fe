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
      <div onClick={() => setResponseValue(value)}>{title}</div>
    </Button>
  );
}
