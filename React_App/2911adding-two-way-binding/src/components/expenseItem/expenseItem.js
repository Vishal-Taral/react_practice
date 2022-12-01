import "./expenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense">
      <span>{props.Prod}</span>
      <span>{props.Price}</span>
      <span>{props.Company}</span>
    </div>
  );
};

export default ExpenseItem;
