import { useEffect } from "react";
import InformationalLayout from "./InformationalLayout";
import Button from "./Button";
import Link from "next/link";

export default function Submit({ completedResponses }) {
  useEffect(() => {
    const finalAnswers = {
      answers: completedResponses,
    };
    fetch("https://blueprint-api.vercel.app/post", {
      method: "POST",
      //     // headers: {
      //     //   Accept: "application/json",
      //     //   "Content-Type": "application/json",
      //     // },
      body: JSON.stringify(finalAnswers),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => console.log("Results from API:", response));
  }, []);
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <InformationalLayout
        header="Thank you for completing Blueprint’s Diagnostic Screening"
        text="No further action is required from you at this time. We’ll see you again
          in a few weeks ! (For demo purposes, please look in the console for the proposed level two assesments from the API)"
      />
      <Link href="/">
        <Button children="Return Home" />
      </Link>
    </div>
  );
}
