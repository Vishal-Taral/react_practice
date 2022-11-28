
import "./expense.css";

const expense = (props) => {
  return (
    <div className="expenses">
      <span>{props.Product}</span>
      <span>{props.Price}</span>
      <span>{props.EXPDate}</span>
      <button className="BuyBtn">Buy Now</button>
    </div>
  );
};

export default expense;
