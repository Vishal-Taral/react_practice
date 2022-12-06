import Expenses from "./components/expeses/expenses";
import NewExpenses from "./components/newExpenses/newExpenses";
import { useState } from "react";
import "./App.css";


const DUMMY_EXPENSES = [
  {
    product: "Fan",
    price: 1800,
    company: "USHA",
    // date : new Date(2022, 12, 24)
  }
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
