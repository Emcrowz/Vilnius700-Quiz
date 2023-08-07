function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  // Code block used to spawn a button to change question state.
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
}

export default NextButton;
