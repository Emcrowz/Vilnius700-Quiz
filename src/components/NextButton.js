function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  //Code block used to spawn a button to change question state.
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Kitas
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Baigti
      </button>
    );

  // index < numQuestions - 1 &&
  //   function () {
  //     const id = setInterval(dispatch({ type: "transition" }), 1000);

  //     dispatch({ type: "transitionEnd" });
  //     dispatch({ type: "nextQuestion" });

  //     //Cleans up timer so it can move between renders and be consistant (stop)
  //     return () => clearInterval(id);
  //   };

  // index === numQuestions - 1 &&
  //   function () {
  //     const id = setInterval(dispatch({ type: "transition" }), 1000);

  //     dispatch({ type: "transitionEnd" });
  //     dispatch({ type: "finish" });

  //     //Cleans up timer so it can move between renders and be consistant (stop)
  //     return () => clearInterval(id);
  //   };
}

export default NextButton;
