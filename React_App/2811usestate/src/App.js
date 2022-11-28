import School from './components/school';
import './App.css';

function App() {
  let teachers = [
    {
      name : "rushikesh",
      age : 22,
      subject : "angular",
    },
    {
      name : "rohan",
      age : 70,
      subject : "react",
    },
    {
      name : "apurv",
      age : 30,
      subject : "javascript",
    },
    
  ]
  return (
    <div className="App">
      <h1>Hiii I am Vishal</h1>
      <School Name = {teachers[0].name} Age = {teachers[0].age} Subject = {teachers[0].subject} />
    </div>
  );
}

export default App;
