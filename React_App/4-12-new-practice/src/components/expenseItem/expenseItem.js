import "./expenseItem.css";

const ExpenseItem = (props) => {    

  return (
    
    <div className="expenseItem">
      <span>{props.prod}</span>
      <span>{props.price}</span>
      <span>{props.company}</span>
      <span>{props.date.toString()}</span>
    </div>
  );
};

export default ExpenseItem;