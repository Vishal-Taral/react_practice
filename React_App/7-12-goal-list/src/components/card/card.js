import "./card.css";

const Card = (props) => {
  const emp = {
    name: "vishal",
  };

  const clickHandler = (data) => {
    props.getdata(data);
  };
  return (
    <div>
      <button onClick={() => clickHandler(emp.name)}>chuchu</button>
    </div>
  );
};

export default Card;
