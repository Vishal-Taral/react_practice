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
    price: 18000,
    company: "SONY",
    date : '2024-12-25'
  },
  {
    product: "AC",
    price: 1800,
    company: "Voltas",
    date : '2020-12-25'
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenses) => {
    setExpenses([...expenses, expenses]);
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
