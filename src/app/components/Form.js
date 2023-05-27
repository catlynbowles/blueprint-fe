import React, { useState } from "react";
import Response from "./Response";

export default function Form({ screener, currentIndex, recordResponse }) {
  const [responseValue, setResponseValue] = useState(null);

  const sections = screener.content.sections[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = {
      question_id: sections.questions[currentIndex].question_id,
      value: responseValue,
    };
    recordResponse(answer);
    clearSelection();
  };

  const clearSelection = () => {
    setResponseValue(null)
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <form>
        <fieldset>
          <legend>{sections.title}</legend>
          <h3>{sections.questions[currentIndex].title}</h3>
          <div className="flex gap-5">
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
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
