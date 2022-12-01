import "./expense.css";
import ExpenseItem from "../expenseItem/expenseItem";
// import { useState } from 'react';

const Expense = (props) => {
  //console.log('Expense Item evalueated by react');

  return (
    // <div className="expense">
    //     <span>{props.Prod}</span>
    //     <span>{props.Price}</span>
    //     <span>{props.Company}</span>
    //     {/* <button className="BuyButton" onClick={clickHandler}>Buy Now</button> */}
    // </div>
    <div>
      <div>
        {props.item.map((expense) => (
          <ExpenseItem
            Prod={expense.product}
            Price={expense.price}
            Company={expense.company}
          />
        ))}
        {/* <ExpenseItem
          Prod={props.item[0].product}
          Price={props.item[0].price}
          Company={props.item[0].company}
        /> */}
      </div>
    </div>
  );
};

export default Expense;
