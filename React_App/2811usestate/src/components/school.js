import { useState } from "react";
import "./school.css";

const School = (data) => {
  const [Age,setAge] =  useState(data.Age);
  let teacherAge = data.Age;

  function click() {
    setAge(Age + 3);
  }
  return (
    <div className="schoolDiv">
      <table>
        <thead>
          <tr>
            <th>Teacher name</th>
            <th>Age</th>
            <th>Subject</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{data.Name}</td>
            <td>{Age}</td>
            <td>{data.Subject}</td>
          </tr>
        </tbody>
        <button onClick={click}> Click me</button>
      </table>
    </div>
  );
};

export default School;
