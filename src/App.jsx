import { useRef, useState } from "react";

import Timer from "./Timer";

function App() {
  const timerRef = useRef(5);
  const [timer, setTimer] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(true);

  const onClickHandler = () => {
    const inputTimeValue = parseInt(timerRef.current.value, 10);
    if (!isNaN(inputTimeValue)) {
      setTimer(inputTimeValue);
      setDisplayMessage(false);
    } else alert("Please enter the time in minutes");
  };
  return (
    <div className="container">
      <h1>On the way Timer</h1>
      <div className="underline"></div>
      <input className="form-input" type="number" ref={timerRef} />
      <button className="btn" onClick={onClickHandler} type="button">
        {displayMessage
          ? "Please enter the time"
          : ` Updated the timer to ${timer} mins`}
      </button>
      <button className="btn" onClick={() => setTimer(0)} type="button">
        Stop timer
      </button>
      <Timer key={timer} timer={timer} />
    </div>
  );
}

export default App;
