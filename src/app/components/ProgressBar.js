import React from "react";

export default function ProgressBar({ currentIndex }) {
  const percentageComplete = (currentIndex / 8) * 100;

  return (
    <div className="p-5">
      <div
        className=" bg-gray h-6 mt-5 w-full z-20 rounded-full shadow-md"
        role="progressbar"
        aria-valuenow={percentageComplete}
        aria-valuemin="0"
        aria-valuemax="100"
        id="progressPercentage"
        aria-label="Progress Bar"
      >
        <div
          className="bg-magenta rounded-full h-6 text-center text-white text-sm transition-all duration-700 opacity-80"
          style={{ width: `${percentageComplete}%` }}
          x-text={`${percentageComplete}%`}
        ></div>
      </div>
    </div>
  );
}
