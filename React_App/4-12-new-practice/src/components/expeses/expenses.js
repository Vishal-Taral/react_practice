import "./expenses.css";
import ExpenseItem from "../expenseItem/expenseItem";
import ExpenseFilter from "../expenseFilter/expensefilter";
import Card from "../card/card";
const Expenses = (props) => {

  
  
  return (
    <div className="expenses">
        <ExpenseFilter/>
      <Card className="expense-list">
        
      {props.item.map((expense) => (
          
          <ExpenseItem
            key={expense.expenses}  // if we dont use key Warning :- (Each child in a list should have a unique "key" prop.)
            prod={expense.product}
            price={expense.price}   
            company={expense.company}
            // date = {expense.date.toString()}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;



// import "./expenses.css";
// import ExpenseItem from "../expenseItem/expenseItem";
// import ExpenseFilter from "../expenseFilter/expensefilter";
// import { useState } from "react";
// import Card from "../card/card";
// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState();
//   const filteredChangeHandler = (selectedYear) => {setFilteredYear(selectedYear)};
//   const filteredExpenses = props.item.filter(expense => {
//     return expense.date.toString() === filteredYear;
//   });
//   return (
//     <div className="expenses">
//       <ExpenseFilter selected={filteredYear} onChangeFilter={filteredChangeHandler}/>
//       <Card className="expense-list">

//         {filteredExpenses.length ===  0 ? (<h3>Nothing is here</h3>) : (
//           filteredExpenses.map((expense) => (
//             <ExpenseItem
//               key={expense.company} // if we dont use key Warning :- (Each child in a list should have a unique "key" prop.)
//               prod={expense.product}
//               price={expense.price}
//               company={expense.company}
//               // date={expense.date}
//             />
//           ))
//          )}
        
//       </Card>
//     </div>
//   );
// };

// export default Expenses;