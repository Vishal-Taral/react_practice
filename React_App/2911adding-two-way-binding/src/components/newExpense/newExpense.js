import ExpenseForm from '../newForm/expenseForm';
import './newExpense.css';

const NewExpense = (props) => {
    const saveProductDataHandeler = (enteredProductData) => {
        const productData = { 
            ...enteredProductData,
            id: Math.random().toString()
        };
        
        props.onAddProduct(productData)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveProductData = { saveProductDataHandeler }/>
        </div>
    )
}

export default NewExpense ;