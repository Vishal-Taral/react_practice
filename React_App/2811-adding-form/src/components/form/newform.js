import { useState } from "react";
import Card from "../UI/card";
import "./newform.css";

let Newform = (props) => {
  const [enteredProduct, setEnterdProduct] = useState("xx");
  const [enteredPrice, setEnterdPrice] = useState(5555);
  const [array, setArray] = useState([]);
  console.log("outside-function-formComponent-array", array);

  const ChangeProductHandler = (containt) => {
    setEnterdProduct(containt.target.value);
  };

  const ChangePriceHandler = (containt) => {
    setEnterdPrice(containt.target.value);
  };

  const submitHandler = (events) => {
    events.preventDefault();

    setArray([
      ...array,
      {
        title: enteredProduct,
        Price: enteredPrice
      },
    ]);

    console.log("inside-function-formComponent-array", array);
    props.onAddExpense(array);
  };

  return (
    <div>
      <Card className="outerdiv">
        <h1>Section to add new product</h1>
        <div className="form-new-expense">
          <form>
            <label>
              <strong>Product</strong>
            </label>
            <br></br>
            <input
              className="input"
              type="text"
              value={enteredProduct}
              onChange={ChangeProductHandler}
            ></input>
          </form>

          <form>
            <label>
              <strong>Amount</strong>
            </label>
            <br></br>
            <input
              className="input"
              type="number"
              value={enteredPrice}
              onChange={ChangePriceHandler}
            ></input>
          </form>
        </div>
        <button
          className="expenseBtn btn"
          type="submit"
          onClick={submitHandler}
        >
          Add Expense
        </button>
      </Card>
    </div>
  );
};

export default Newform;
