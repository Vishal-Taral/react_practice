
import "./expense.css";
import { useState } from "react";

const Expense = (props) => {
  // setAlldata(props.data)
  console.log("Expense ==>", props.data);
  return (
    <div>
      {props.data.length>=1?props.data.map((rowdata) => {
        return (<div><span className="col">{rowdata.title}</span>
            <span className="col">{rowdata.Price}</span>
          </div>
        );
      }):''}      
      {props.data.length>=1?<button className="BuyBtn">Buy Now</button>:''}
    </div>
  );
};

export default Expense;
