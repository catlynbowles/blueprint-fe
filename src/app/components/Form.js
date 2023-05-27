import React from "react";
import Response from "./Response";

export default function Form({ screener, currentIndex, submitQuestion }) {
  const sections = screener.content.sections[0];
  return (
    <div className="flex flex-col justify-center items-center gap-y-5">
      <form>
        <fieldset>
          <legend>{sections.title}</legend>
          <h3>{sections.questions[currentIndex].title}</h3>
          <div className="flex gap-5">
            {sections.answers.map((answer) => (
              <Response title={answer.title} value={answer.value} />
            ))}
          </div>
          <button type="submit" onClick={(e) => submitQuestion(e)}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
