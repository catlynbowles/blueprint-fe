import React from "react";

export default function ProgressBar({ currentIndex }) {
  const percentageComplete = (currentIndex / 8) * 100;

  return (
    <div className="p-5">
      <div
        className=" bg-dark-blue rounded h-6 mt-5 w-full z-20"
        role="progressbar"
        aria-valuenow={percentageComplete}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="bg-sky-blue rounded h-6 text-center text-white text-sm transition-all duration-700"
          style={{ width: `${percentageComplete}%` }}
          x-text={`${percentageComplete}%`}
        ></div>
      </div>
    </div>
  );
}
