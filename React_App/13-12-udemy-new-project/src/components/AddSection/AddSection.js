import React from "react";
import "./AddSection.css";
import List from "../List/List";
import { useState } from "react";

const AddSection = () => {
  

  const [studList, setStudList] = useState([]);
  const [name, setName] = useState();

  const ChangeHandler = (event) => {
    setName(event.target.value);
    const capName = event.target.value.toUpperCase();
    setName(capName);
  };

  const clickHandler = (event) => {
    setStudList([...studList, name]);
  };
  console.log(studList);

  return (
    <div className="main">
      <div className="add-section">
        <label className="lables">
          <strong>name</strong>
        </label>
        <br />
        <input
          className="inputs"
          type="text"
          placeholder="write your name here"
          onChange={ChangeHandler}
        />
        <br />
        <button className="btn" onClick={clickHandler}>
          ADD
        </button>
      </div>

      {/* <div className="name-list">
        {studList.map((items) => {
          return (
          <li className="list">{items}</li>
          )
        })}
      </div> */}

      <div>
        <List students={studList} />
      </div>


    </div>
  );
};

export default AddSection;
