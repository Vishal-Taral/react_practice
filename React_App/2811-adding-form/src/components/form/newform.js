import { useState, useMemo } from "react";
import Card from "../UI/card";
import "./newform.css";

let Newform = (props) => {
  const [enteredProduct, setEnterdProduct] = useState("");
  const [enteredPrice, setEnterdPrice] = useState("");
  const [array, setArray] = useState([]);

  const ChangeProductHandler = (containt) => {
    setEnterdProduct(containt.target.value);
  };

  const ChangePriceHandler = (containt) => {
    setEnterdPrice(containt.target.value);
  };

  // const changeData = () => {
  //   console.log('newForm===>',array)
  //   props.dataHandler(array);
  // }

  const submitHandler = (events) => {
    // events.preventDefault();
    // console.log(enteredPrice,enteredProduct)
    // setArray([
    //   ...array,{
    //     title: enteredProduct,
    //     Price: enteredPrice
    //   }
    // ])

    // setArray([
    //   ...array,
    //   {
    //     title: enteredProduct,
    //     Price: enteredPrice
    //   },
    // ]);

    // array.push(
    //      {
    //       title: enteredProduct,
    //       Price: enteredPrice
    //     }
    //   )

    setArray(() => [
      ...array,
      {
        title: enteredProduct,
        Price: enteredPrice,
      }
    ]);

    props.newForm(array)
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
