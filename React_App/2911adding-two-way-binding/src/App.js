import NewExpense from "./components/newExpense/newExpense";
import { useState } from "react";
import Expense from "./components/expenses/expense";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    product: "TV",
    price: 2000,
    company: "Sony",
  },
  {
    product: "freeze",
    price: 23000,
    company: "Samsung",
  },
  {
    product: "Laptop",
    price: 50000,
    company: "Apple",
  },
];

function App() {
  const [ expenses ,setExpenses ] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
      setExpenses(prevExpenses => {
        return [expense, ...prevExpenses];
      });
  };
  return (
    <div className="App">
      <NewExpense onAddProduct={addExpenseHandler} />
      <div>
        <h3>Product List</h3>
        {/* <Expense
          Prod={expenses[0].product}
          Price={expenses[0].price}
          Company={expenses[0].Company}
        />
        <Expense
          Prod={expenses[1].product}
          Price={expenses[1].price}
          Company={expenses[1].Company}
        /> */}

        <Expense item={expenses}/>
      </div>
    </div>
  );
}

export default App;  
