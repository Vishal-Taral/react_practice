import Expenses from "./components/expeses/expenses";
import NewExpenses from "./components/newExpenses/newExpenses";
import React, { useState } from "react";
import "./App.css";


const DUMMY_EXPENSES = [
  {
    product: "Fan",
    price: 1800,
    company: "USHA",
    date : '2022-12-25'
  },
  {
    product: "TV",
    price: 35000,
    company: "SAMSUNG",
    date : '2018-11-25'
  },
  {
    product: "Mixer",
    price: 2200,
    company: "surya",
    date : '2018-12-1'
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenses) => {
    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpenses onAddProduct={addExpenseHandler} />
      <div className="expenseList">
        <h3>Product List</h3>
        <Expenses item={expenses} />
      </div>
    </div>
  );
}

export default App;
