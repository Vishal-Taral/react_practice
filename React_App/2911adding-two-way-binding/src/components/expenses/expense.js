import "./expense.css";
import ExpenseItem from "../expenseItem/expenseItem";
import ExpenseFilter from "../expenseFilter/expenseFilter";
// import { useState } from 'react';

const Expense = (props) => {
  

  return (
    
    <div>
      <div>
        <ExpenseFilter />
        {props.item.map((expense) => (
          <ExpenseItem
             key={expense.product}  // if we dont use key Warning :- (Each child in a list should have a unique "key" prop.)
            Prod={expense.product}
            Price={expense.price}
            Company={expense.company}
          />
        ))}
        
      </div>
    </div>
  );
};

export default Expense;


