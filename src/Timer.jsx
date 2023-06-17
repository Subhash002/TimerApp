import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Timer = ({ timer }) => {
  const [seconds, setSeconds] = useState(timer * 60);
  useEffect(() => {
    let intervalId = null;
    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  if (seconds === 0) {
    return (
      <div>
        <h1 className="title">0 mins time left</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="loading"></div>
      <h1>Time left: {formatTime(seconds)}</h1>
    </div>
  );
};

export default Timer;
