import "./App.css";
import Card from "./components/card/card";
import BtnClick from "./components/btnClick/btnClick";
function App() {
  let studentName = {
    name: "vishal",
  };

  return (
    <div>
      <h1 className="textfield">App Component</h1>
      <div className="App">
        <Card />
        <Card />
      </div>

      <div>
        <BtnClick name = {studentName.name}/> 
      </div>
    </div>
  );
}

export default App;
