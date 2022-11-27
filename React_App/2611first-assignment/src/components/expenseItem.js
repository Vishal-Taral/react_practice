import Version from './version'
import Card from './card'
import './expenseItem.css'

let expenseItem = (props) => {
    return (
        <Card className="expense">
            <div clsssName="containt amountBtn">{props.date}</div>
            <Version/>
            <div clsssName="containt amountBtn">{props.title}</div>
            <button className="amountBtn containt">{props.amount}</button>
        </Card>
    )
}

export default expenseItem
