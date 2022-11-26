import './classroom.css'
let classroom = () => {
  let studclass = 9;
  return (
    <div className="classDiv">
      <h1>{studclass} <sup>th</sup> Class</h1>
    </div>
  );
};

export default classroom;
