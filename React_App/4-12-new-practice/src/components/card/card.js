import "./card.css";

const Card = (props) => {
  let classes = "card " + props.className;
  return <div className={classes}>{props.parent}</div>;
};

export default Card;