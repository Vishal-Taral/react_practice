import './ExpenseItem.css'

function ExpenseItem() {
    const birthDate = new Date (1999,12,14);
    const birthdayBoy = 'Vishal';
    let gift = 'Car';
    return (
    <div className='mainDiv'>
    
        <h5>{Math.random()}</h5> {/* we can write expression also in curly bracks */ }
        <h4>{birthDate.toISOString()} </h4>
        <h4>{birthdayBoy} </h4>
        <h4>{gift}</h4>
        <p>ExpenseItem Component Created</p>
    </div>
);
}

export default ExpenseItem;
