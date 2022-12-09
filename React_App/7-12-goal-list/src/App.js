import "./App.css";
import Card from "./components/card/card";
import BtnClick from "./components/btnClick/btnClick";
function App() {
  const name = "vishal";

  const getData = (dataBhai) => {
    console.log(dataBhai);
  };

  return (
    <div>
      <BtnClick name={name} sendData = {getData} />
      <Card getdata={getData} />
    </div>
  );
}

export default App;
