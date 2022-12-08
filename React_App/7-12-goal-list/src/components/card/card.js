import "./card.css";
import { useState } from "react";

const Card = () => {
  const [input, setInput] = useState("");
  const [input1, setinput1] = useState("hello");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const changeText = (t) => {
    setinput1(t.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" onChange={changeText} />
        <h2>{input1}</h2>
      </div>
      <input type="date" onChange={changeHandler} />

      <h1>{input}</h1>
    </div>
  );
};

export default Card;
