import React, { useState } from "react";
import "./expenseForm.css";

const ExpenseForm = (props) => {
    const [enteredProduct , setEnteredProduct] = useState('');
    const [enteredPrice , setEnteredPrice] = useState('');
    const [enteredCompany , setEnteredCompany] = useState('');

    /* mehtod to use one state instead of multiple state
    following single line commented code is for multiple state */ 

    /* const [userInput, setUserInput] = useState({
        enteredProduct : '',
        enteredPrice : '',
        enteredCompany : '',
    })
 */
    const productChangeHandler = (event) => {
        setEnteredProduct(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredProduct: event.target.value,
        }) */

        /* setUserInput((previousState) => {
            return {...previousState, enteredProduct: event.target.value}
        }) */

    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredPrice: event.target.value,
        }) */

    };

    const companyChangeHandler = (event) => {
        setEnteredCompany(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredCompany: event.target.value,
        }) */
    };

    const submitHandler = (event) => {
        // event.preventDefault();  /****/

        const productData = {
            product : enteredProduct,
            price : enteredPrice,
            company : enteredCompany
        }
        props.onSaveProductData(productData); 
        setEnteredProduct('');
        setEnteredPrice('');
        setEnteredCompany('');
    };
  return (
    <div className="new-product-form">
      <h4>Form to add new product</h4>
      <div className="first " >
        <form className="form" >
          <div>
            <lable><strong>New Product Name</strong> </lable>
            <input type="text" value={enteredProduct} onChange={productChangeHandler}/>
          </div>

          <div>
            <lable> <strong>Product Price</strong></lable>
            <input type="number" value={enteredPrice} onChange={priceChangeHandler}/>
          </div>

          <div>
            <lable><strong>Product Company</strong> </lable>
            <input type="text" value={enteredCompany} onChange={companyChangeHandler} />
          </div>
        </form>
        <div>
          <button type="submit" className="add-button" onClick={submitHandler}>Add product</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
