import ExpenseForm from '../expenseForm/expenseForm';
import './newExpenses.css'

const NewExpenses = (props) => {
    const saveProductDataHandler = (enteredProductData) => {
        const productData = {
          ...enteredProductData,
        };
        console.log(productData);
        props.onAddProduct(productData);
      };
    
    return(
        <div className="new-expenses">
            <ExpenseForm onSaveProductData={saveProductDataHandler}/>
        </div>
    );
}

export default NewExpenses;