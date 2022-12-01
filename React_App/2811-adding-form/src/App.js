import Expense from "./components/expenses/Expense";
import Newform from "./components/form/newform";
import Card from "./components/UI/card";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setdata] = useState([]);
  const dataHandler = (datas) => {
    setdata(datas)
  };

  return (
    <div className="App">
      <Newform newForm={dataHandler} />
      <Card>
        <Expense newdata={data} />
      </Card>
    </div>
  );
}

export default App;
