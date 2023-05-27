import { useEffect, useState } from "react";
import Response from "@/app/components/Response";

export default function Screener() {
  const [screener, setScreener] = useState(null);

  useEffect(() => {
    fetch("http://localhost:2222/screener")
      .then((resp) => resp.json())
      .then((data) => setScreener(data));
  }, []);

  return (
    <div>
      {screener && (
        <div className="flex flex-col justify-center items-center">
          <h3>{screener.content.sections[0].title}</h3>
          <div>
            {screener.content.sections[0].answers.map((answer) => (
              <Response title={answer.title} value={answer.value} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
