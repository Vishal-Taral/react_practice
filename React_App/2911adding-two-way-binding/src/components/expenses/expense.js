import "./expense.css";
import { useState } from 'react';

const Expense = (props) => {
     const [Prod,setProd] = useState(props.Prod);
     //console.log('Expense Item evalueated by react');  
      /* const clickHandler = () => {
        setProd('great');
      }; */

  return (
    <div className="expense">
        <span>{Prod}</span>
        <span>{props.Price}</span>
        <span>{props.Company}</span>
        {/* <button className="BuyButton" onClick={clickHandler}>Buy Now</button> */}
        <button className="BuyButton">Buy Now</button>
    </div>
  );
};

export default Expense;
