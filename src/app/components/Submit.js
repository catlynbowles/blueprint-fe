import { useEffect } from "react";
import InformationalLayout from "./InformationalLayout";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";

export default function Submit({ completedResponses }) {
  const [error, setError] = useState(null);

  useEffect(() => {
    const finalAnswers = {
      answers: completedResponses,
    };
    console.log("Completed Survey:", finalAnswers);
    fetch("https://blueprint-api.vercel.app/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalAnswers),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => console.log("Results from API:", response))
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [completedResponses]);

  const clearResponses = () => {
    completedResponses = [];
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <InformationalLayout
        header="Thank you for completing our Diagnostic Screening"
        text={
          error
            ? "We're having some difficulties submitting your survey. Please return home to resubmit your survey."
            : "No further action is required from you at this time. We’ll see you again in a few weeks !"
        }
      />
      <p>
        ** For demo purposes, please look in the console for the proposed level
        two assesments from the API **
      </p>
      <Link href="/" onClick={() => clearResponses()}>
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
