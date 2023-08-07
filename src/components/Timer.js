import { useEffect } from "react";

import styles from "./Timer.module.css";

function Timer({ secondsRemaining, dispatch }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  //Mounts as soon as game starts
  useEffect(
    function () {
      //Timer returns a unique id every time
      const id = setInterval(function () {
        dispatch({ type: "countdown" });
      }, 1000);

      //Cleans up timer so it can move between renders and be consistant (stop)
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className={styles.timer}>
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
