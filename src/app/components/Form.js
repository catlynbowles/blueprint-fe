import React, { useState } from "react";
import Response from "./Response";
import ProgressBar from "./ProgressBar";

export default function Form({ screener, currentIndex, recordResponse }) {
  const [responseValue, setResponseValue] = useState(null);
  const [error, setError] = useState(false);

  const sections = screener.content.sections[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = {
      question_id: sections.questions[currentIndex].question_id,
      value: responseValue,
    };
    console.log(responseValue, 'val')
    console.log(answer, "answer");
    recordResponse(answer);
  };

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col justify-center items-center gap-y-5"
      >
        <legend className="font-bold text-xl">{sections.title}</legend>
        <h3 className="font-semibold text-lg">
          {sections.questions[currentIndex].title}
        </h3>
        <div className="flex gap-5 flex-col">
          {sections.answers.map((answer) => (
            <Response
              title={answer.title}
              value={answer.value}
              responseValue={responseValue}
              setResponseValue={setResponseValue}
              key={answer.title}
            />
          ))}
        </div>
      </form>
      <ProgressBar currentIndex={currentIndex} />
    </div>
  );
}
