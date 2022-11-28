import Card from '../UI/card';
import './expenseItem.css'

let expenseItem = (data) => {
    function click () {
        console.log('clicked')
    };
    return (
        <Card className="ExpenseItem">
            <div>{data.product}</div>
            <div>{data.expiry}</div>
            <div>{data.Owner}</div>
            <button onClick={click}>Click me</button>
        </Card>
    ) ;
}

export default expenseItem; 