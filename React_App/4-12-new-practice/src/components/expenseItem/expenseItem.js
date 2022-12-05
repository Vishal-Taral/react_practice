import "./expenseItem.css";

const ExpenseItem = (props) => {
    
  return (
    
    <div className="expenseItem">
      <span>{props.Prod}</span>
      <span>{props.Price}</span>
      <span>{props.Company}</span>
      {/* <span>{props.Date.toDateString()}</span> */}
    </div>
  );
};

export default ExpenseItem;