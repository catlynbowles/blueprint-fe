import { useEffect } from "react";

export default function Submit({completedResponses}) {
  useEffect(() => {
    const finalAnswers = {
      answers: completedResponses
    }
    console.log(finalAnswers)
    fetch("http://localhost:2222/post", {
      method: "POST",
  //     // headers: {
  //     //   Accept: "application/json",
  //     //   "Content-Type": "application/json",
  //     // },
      body: JSON.stringify(finalAnswers),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, []);
  return (
    <div>
      Your responses are being recorded and will be shared with your provider so
      that they can help provide you with the most effective care.
    </div>
  );
}
