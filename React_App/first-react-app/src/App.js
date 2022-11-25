import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  let empInfo = [
    {
      id: 1,
      name: "vishal",
      joiningDate: new Date(2022, 9, 26),
    },
    {
      id: 2,
      name: "rohan",
      joiningDate: new Date("05 October 2011 14:48 UTC"),
    },
    {
      id: 3,
      name: "ataharva",
      joiningDate: new Date(2022, 1, 26),
    },

  ];
  return (
    <div className="App">
      <h1>Hello.. World..! I am Vishal</h1>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem empName={empInfo[0].name} empId = {empInfo[0].id} empJoining = {empInfo[0].joiningDate}/>
      <ExpenseItem empName={empInfo[1].name} empId = {empInfo[1].id} empJoining = {empInfo[1].joiningDate}/>
      <ExpenseItem empName={empInfo[2].name} empId = {empInfo[2].id} empJoining = {empInfo[2].joiningDate}/>
      {/**We can reuse the component easily with less coding*/}
    </div>
  );
}

export default App;
