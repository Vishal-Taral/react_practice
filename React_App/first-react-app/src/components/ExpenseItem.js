import './ExpenseItem.css'

function ExpenseItem (props) {
//    console.log(props.empName,props.empjoining); 
        const birthDate = new Date (1999,12,14);
        const birthdayBoy = 'Vishal';
        let gift = 'Car';
   

        return (
    <div className='mainDiv'>
        <h5>{Math.random()}</h5> {/* we can write expression also in curly bracks */ }
        <h4>{birthDate.toISOString()} </h4>
        <h4>{birthdayBoy} </h4>
        <h4>{gift}</h4>
        <h1>{props.empName}</h1>
        <h1>{props.empId}</h1>
        <p>{props.empJoining?.toISOString()}</p>
        <p>ExpenseItem Component Created</p>
    </div>
);
}

export default ExpenseItem;
