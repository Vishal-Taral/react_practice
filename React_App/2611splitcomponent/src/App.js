import School from './components/school';
import './App.css';

function App() {
  let students = [
    {
      stdName : "vishal",
      rollNo : 1,
      subject : "english",
    },
    {
      stdName : "samruddhi",
      rollNo : 2,
      subject : "marathi" ,
    },
    {
      stdName : "Bhagawat",
      rollNo : "3",
      subject : "urdu",
    },
    {
      stdName : "puja",
      rollNo : "4",
      subject : "maths",
    }
  ]
  return (
    <div className="App">
      <School name = {students[0].stdName} number = {students[0].rollNo} sub = {students[0].subject}/>
      {/* <School name = {students[1].stdName} number = {students[1].rollNo} sub = {students[1].subject}/>
      <School name = {students[2].stdName} number = {students[2].rollNo} sub = {students[2].subject}/>
      <School name = {students[3].stdName} number = {students[3].rollNo} sub = {students[3].subject}/> */}
    </div>
  );
}

export default App;

