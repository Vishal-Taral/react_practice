import Expense from "./components/expenses/Expense";
import Newform from "./components/form/newform";
import Card from "./components/UI/card";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setdata] = useState([]);
  const dataHandler = (datas) => {
    console.log('app==>',datas)
    setdata(datas)
  };

  return (
    <div className="App">
      <Newform dataHandler={dataHandler} />
      <Card>
        <Expense data={data} />
      </Card>
    </div>
  );
}

export default App;
