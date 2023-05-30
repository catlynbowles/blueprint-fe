import { useEffect, useState } from "react";
import Form from "@/app/components/Form";
import Submit from "@/app/components/Submit";
import DialogBox from "@/app/components/DialogBox";

export default function Screener() {
  const [screener, setScreener] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedResponses, setCompletedResponses] = useState([]);

  const recordResponse = (answer) => {
    setCurrentIndex(currentIndex + 1);
    completedResponses.push(answer);
    console.log(completedResponses);
  };

  useEffect(() => {
    fetch("https://blueprint-api.vercel.app/screener")
      .then((resp) => resp.json())
      .then((data) => setScreener(data));
  }, []);

  return (
    <div className="flex flex-col items-center text-center justify-center min-h-max">
      {screener &&
      currentIndex === screener.content.sections[0].questions.length ? (
        <DialogBox>
          <Submit completedResponses={completedResponses} />
        </DialogBox>
      ) : (
        screener && (
          <DialogBox>
            <Form
              screener={screener}
              currentIndex={currentIndex}
              recordResponse={recordResponse}
            />
          </DialogBox>
        )
      )}
    </div>
  );
}
