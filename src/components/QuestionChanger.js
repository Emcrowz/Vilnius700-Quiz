import { useState, useEffect } from "react";

function QuestionChanger({
  secondsToChange,
  dispatch,
  answer,
  index,
  numQuestions,
}) {
  if (answer === null) return null;

  const [count, setCount] = useState(secondsToChange);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    count === 0 &&
      index < numQuestions - 1 &&
      dispatch({ type: "nextQuestion" });

    count === 0 && index === numQuestions - 1 && dispatch({ type: "finish" });

    return () => clearInterval(interval);
  }, [count]);

  return <div>{count}</div>;
}

export default QuestionChanger;
