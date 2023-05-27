export default function Submit() {
  useEffect(() => {
    fetch("http://localhost:2222/post", {
      method: "POST",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify({
        answers: [
          {
            value: 1,
            question_id: "question_a",
          },
          {
            value: 0,
            question_id: "question_b",
          },
          {
            value: 2,
            question_id: "question_c",
          },
          {
            value: 3,
            question_id: "question_d",
          },
          {
            value: 1,
            question_id: "question_e",
          },
          {
            value: 0,
            question_id: "question_f",
          },
          {
            value: 1,
            question_id: "question_g",
          },
          {
            value: 0,
            question_id: "question_h",
          },
        ],
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, []);
  return <div>Submit</div>;
}
