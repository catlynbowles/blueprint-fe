import { useEffect, useState } from "react";
import Form from "@/app/components/Form";
import Submit from "../submit";

export default function Screener() {
  const [screener, setScreener] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedResponses, setCompletedResponses] = useState([])

  const recordResponse = (answer) => {
    setCurrentIndex(currentIndex + 1);
    completedResponses.push(answer)
    console.log(completedResponses)
  };

  useEffect(() => {
    fetch("http://localhost:2222/screener")
      .then((resp) => resp.json())
      .then((data) => setScreener(data));
  }, []);

  return (
    <div>
      {screener &&
      currentIndex === screener.content.sections[0].questions.length ? (
        <Submit completedResponses={completedResponses}/>
      ) : (
        screener && (
          <Form
            screener={screener}
            currentIndex={currentIndex}
            recordResponse={recordResponse}
          />
        )
      )}
    </div>
  );
}
