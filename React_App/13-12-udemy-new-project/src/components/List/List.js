import React from "react";

const List = (props) => {
  
  return (
    <div className="stud-list">
      <ul>
        {props.students.map((name) => {
          return (
            <div>
              <li className="list">{name} </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
