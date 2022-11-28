import ExpenseQulity from './components/expenses/expenseQC'
import ExpenseItem from './components/expenses/expenseItem';
//import Card from './components/UI/card';
import './App.css';

function App() {
  let expenses = [
    {
      product : "freeze",
      expiryDate : new Date(2023, 11, 11),
      owner : "vishal taral",
    },
    {
      product : "FAN",
      expiryDate : new Date(2023, 9, 24),
      owner : "Samruddhi ugale",
    },
    {
      product : "Oven",
      expiryDate : new Date(2023, 2, 24),
      owner : "rohan odel",
    }
  ]
  return (
    <div className="App">
      <h1>Come Fast And buy Once..!</h1>
      <h3>The best quality products</h3>
      <ExpenseQulity/>
      <ExpenseItem product = {expenses[0].product} expiry = {expenses[0].expiryDate.toDateString()} Owner = {expenses[0].owner}/>
      <ExpenseItem product = {expenses[1].product} expiry = {expenses[1].expiryDate.toDateString()} Owner = {expenses[1].owner}/>
      <ExpenseItem product = {expenses[2].product} expiry = {expenses[2].expiryDate.toDateString()} Owner = {expenses[2].owner}/>

    </div>
  );
}

export default App;
