import Card from "../UI/card";
import "./newform.css";

let newform = () => {
    const titleChangeHandler = (containt) => {
        console.log(containt.target.value);
    };

  return (
    <div>
      <Card className="outerdiv">
        <h1>Section to add new product</h1>
        <div className="form-new-expense">
          <form>
            <lable><strong>Product</strong></lable>
            <br></br>
            <input className="input" type="text" onChange={titleChangeHandler}></input>
          </form>

          <form>
            <lable><strong>Amount</strong></lable>
            <br></br>
            <input className="input"  type="number"></input>
          </form>

          <form>
            <lable><strong>Date</strong></lable>
            <br></br>
            <input className="input" type="date"></input>
          </form>
          
        </div>
        <button className="expenseBtn btn">Add Expense</button>
      </Card>
    </div>
  );
};

export default newform;
