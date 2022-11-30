import Expense from "./components/expenses/expense";
import Newform from "./components/form/newform";
import Card from "./components/UI/card";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setdata] = useState([]);
  const dataHandler = (data) => {
    setdata(data);
  };

  console.log('appComponent-array',data)

  return (
    <div className="App">
      <Newform onAddExpense={dataHandler} />
      <Card>
        <Expense data={data} />
      </Card>
    </div>
  );
}

export default App;
