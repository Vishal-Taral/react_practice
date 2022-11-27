import Version from './version'
import './expenseItem.css'

let expenseItem = (props) => {
    return (
        <div className="expense">
            <div clsssName="containt amountBtn">{props.date}</div>
            <Version/>
            <div clsssName="containt amountBtn">{props.title}</div>
            <button className="amountBtn containt">{props.amount}</button>
        </div>
    )
}

export default expenseItem
