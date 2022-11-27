import ExpenseItem from './components/expenseItem';
import './App.css';

let App = () => {
  let expenses = [
    {
      id : "e1",
      title : "Toilet paper",
      amount : 200,
      date : new Date(2022, 12, 14),
    },
    {
      id : "e2",
      title : "TV",
      amount : 15000,
      date : new Date(2022, 9, 12), 
    },
    {
      id : "e3",
      title : "Fan",
      amount : 1800,
      date : new Date(2022, 7, 10), 
    },
  ]
  return (
    <div className="App">
      <ExpenseItem title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date.toLocaleDateString()} />
      <ExpenseItem title = {expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date.toLocaleDateString()} />
      <ExpenseItem title = {expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date.toLocaleDateString()} />
    </div>
  );
}

export default App;
