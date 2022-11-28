import Expense from "./components/expenses/expense";
import Newform from "./components/form/newform";
import Card from "./components/UI/card";
import "./App.css";

function App() {
  let expenses = [
    {
      product: "TV",
      price: 12000,
      expdate: new Date(2022, 9, 24),
    },
    {
      product: "freeze",
      price: 15000,
      expdate: new Date(2022, 9, 2),
    },
    {
      product: "TV",
      price: 12000,
      expdate: new Date(2024, 2, 24),
    },
  ];

  return (
    <div className="App">
      <Newform/>
      <Card>
        <Expense
          Product={expenses[0].product}
          Price={expenses[0].price}
          EXPDate={expenses[0].expdate.toDateString()}
        />
      </Card>

      <Card>
        <Expense
          Product={expenses[1].product}
          Price={expenses[1].price}
          EXPDate={expenses[1].expdate.toDateString()}
        />
      </Card>

      <Card>
        <Expense
          Product={expenses[2].product}
          Price={expenses[2].price}
          EXPDate={expenses[2].expdate.toDateString()}
        />
      </Card>
    </div>
  );
}

export default App;
