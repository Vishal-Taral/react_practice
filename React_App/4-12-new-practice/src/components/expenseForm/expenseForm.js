import "./expenseForm.css";
import React, { useState } from "react";
import Card from "../card/card";

const ExpenseForm = (props) => {
  const [enteredProduct, setEnteredProduct] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredCompany, setEnteredCompany] = useState("");

  const productChangeHandler = (event) => {
    setEnteredProduct(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const companyChangeHandler = (event) => {
    setEnteredCompany(event.target.value);
  };

  const submitHandler = () => {
    const productData = {
      product: enteredProduct,
      price: enteredPrice,
      company: enteredCompany,
    };
    props.onSaveProductData(productData);
    setEnteredProduct("");
    setEnteredPrice("");
    setEnteredCompany("");
  };

  return (
    <Card className="main p-3 border-warning rounded-pill ">
      <div className="form row  ">
        <div className="fields">
          <label className="title">New Product Name :-</label>
          <input
            type="text"
            className="inputs"
            placeholder="enter product here"
            value={enteredProduct}
            onChange={productChangeHandler}
          />
        </div>

        <div className="fields  ">
          <label className="title">product price :-</label>
          <input
            type="number"
            className="inputs"
            placeholder="enter price here "
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>

        <div className="fields ">
          <label className="title">product company :-</label>
          <input
            type="text"
            className="inputs"
            placeholder="enter company here "
            value={enteredCompany}
            onChange={companyChangeHandler}
          />
        </div>
      </div>
      <div>
        <button className=" add-button bg-danger rounded-pill " onClick={submitHandler}>
          Add Product
        </button>
      </div>
    </Card>
  );
};

export default ExpenseForm;