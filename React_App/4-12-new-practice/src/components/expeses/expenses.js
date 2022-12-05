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
            // key={expense.expenses}  // if we dont use key Warning :- (Each child in a list should have a unique "key" prop.)
            Prod={expense.product}
            Price={expense.price}   
            Company={expense.company}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
