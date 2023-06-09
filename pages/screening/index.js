import { useEffect, useState } from "react";
import Form from "@/app/components/Form";
import Submit from "@/app/components/Submit";
import DialogBox from "@/app/components/DialogBox";
import Loading from "@/app/components/Loading";

export default function Screener() {
  const [screener, setScreener] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedResponses, setCompletedResponses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const recordResponse = (answer) => {
    setCurrentIndex(currentIndex + 1);
    completedResponses.push(answer);
  };

  useEffect(() => {
    fetch("https://blueprint-api.vercel.app/screener")
      .then((resp) => resp.json())
      .then((data) => {
        setScreener(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center text-center justify-center min-h-max">
      {loading ? (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      ) : error ? (
        <p className="text-off-white text-2xl">
          There was a problem loading the survey. Please try later.
        </p>
      ) : screener &&
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
