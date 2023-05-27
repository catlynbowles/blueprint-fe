import { useEffect, useState } from "react";

export default function Screener() {
  const [screener, setScreener] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2222/screener")
      .then((resp) => resp.json())
      .then((data) => setScreener(data));
  }, []);

  return <div>Screener</div>;
}
