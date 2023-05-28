import React from "react";

export default function ProgressBar({ currentIndex }) {
  const percentageComplete = (currentIndex / 8) * 100;

  return (
    <div
      className="bg-gray-900 rounded h-6 mt-5 w-full"
      role="progressbar"
      aria-valuenow={percentageComplete}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        className="bg-blue-800 rounded h-6 text-center text-white text-sm transition"
        style={{width: `${percentageComplete}%`}}
        x-text={`${percentageComplete}%`}
      ></div>
    </div>
  );
}
