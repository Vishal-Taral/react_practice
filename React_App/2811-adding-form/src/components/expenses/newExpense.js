import Newform from "../form/newform"
import './newExpense.css'

const newExpense = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            // id : Math.random().toString()
        };
        
        console.log(expenseData);
    };
    
    return (
        <div>
            <Newform onSaveFormData = {saveExpenseDataHandler}/>
        </div>
    )
}

export default newExpense ;

