import NewExpense from "./components/newExpense/newExpense";
import Expense from "./components/expenses/expense";
import "./App.css";

function App() {
  const expenses = [
    {
      product: "TV",
      price: 2000,
      Company: "Sony",
    },
    {
      product: "freeze",
      price: 23000,
      Company: "Samsung",
    },
    {
      product: "Laptop",
      price: 50000,
      Company: "Apple",
    },
  ];

  const addExpenseHandler = expense => {
      console.log( expense );
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
