
import "./expense.css";
import { useState } from "react";

const Expense = (props) => {
  // var ttt = props.newdata
  const [news, setNews] = useState([]);
  // console.log('expense===>',props.newdata)
  // setNews(oldData=>[
  //   ...oldData,
  //   {ttt}
  // ]);

  console.log(props.newdata)
  // setAlldata(props.data)
  // console.log("Expensesss ==>", props.newdata);
  return (
    <div>
      {/* {props.data.length>=1?props.data.map((rowdata) => {
        return (<div><span className="col">{rowdata.title}</span>
            <span className="col">{rowdata.Price}</span>
          </div>
        );
      }):''} */}
      {/* {props.data.length>=1?<button className="BuyBtn">Buy Now</button>:''} */}


       {news?.map((rowdata) => {
        return (<div><span className="col">{rowdata.title}</span>
            <span className="col">{rowdata.Price}</span>
          </div>
        );
      })} 
    </div>
  );
};

export default Expense;
