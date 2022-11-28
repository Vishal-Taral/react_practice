import { useState } from "react";
import Card from "../UI/card";
import "./newform.css";

let Newform = () => {
  const [enteredProduct, setEnterdProduct] = useState("");
  const [enteredPrice, setEnterdPrice] = useState("");
  const [enteredDate, setEnterdDate] = useState("");
 


  const ChangeProductHandler = (containt) => {
    setEnterdProduct(containt.target.value);
    console.log(containt.target.value);
  };

  const ChangePriceHandler = (containt) => {
    setEnterdPrice(containt.target.value);
    console.log(containt.target.value);
  };

  const ChangeDateHandler = (containt) => {
    setEnterdDate(containt.target.value);
    console.log(containt.target.value);
  };

  return (
    <div>
      <Card className="outerdiv">
        <h1>Section to add new product</h1>
        <div className="form-new-expense">
          <form>
            <lable>
              <strong>Product</strong>
            </lable>
            <br></br>
            <input
              className="input"
              type="text"
              onChange={ChangeProductHandler}
            ></input>
          </form>

          <form>
            <lable>
              <strong>Amount</strong>
            </lable>
            <br></br>
            <input
              className="input"
              type="number"
              onChange={ChangePriceHandler}
            ></input>
          </form>

          <form>
            <lable>
              <strong>Date</strong>
            </lable>
            <br></br>
            <input
              className="input"
              type="date"
              onChange={ChangeDateHandler}
            ></input>
          </form>
        </div>
        <button className="expenseBtn btn" >Add Expense</button>
      </Card>
    </div>
  );
};

export default Newform;
