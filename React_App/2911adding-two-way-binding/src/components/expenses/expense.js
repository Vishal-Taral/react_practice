import {useState} from 'react'
import "./expense.css";

const expense = (props) => {
    const [product , setprod] = useState(props.Prod)
  return (
    <div className="expense">
        <span>{product}</span>
        <span>{props.Price}</span>
        <span>{props.Company}</span>
        <button className="BuyButton">Buy Now</button>
    </div>
  );
};

export default expense;
