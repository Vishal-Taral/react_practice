import './expenseFilter.css'

const ExpenseFilter = () => {
    return (
        <div className="expense-filter p-3 border-warning rounded-pill">
        <div>
          <h3>Filter by year</h3>
        </div>
        <div>
          <select
            id="years"
            className="p-3 border-warning bg-primary rounded-pill"
          >
            <option value="2018">2020</option>
            <option value="2019">2021</option>
            <option value="2019">2022</option>
            
          </select>
        </div>
      </div>
    );
}

export default ExpenseFilter; 