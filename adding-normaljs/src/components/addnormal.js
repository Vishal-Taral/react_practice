import "./addnormal.css";

let addnormal = (data) => {
    

  return (
    
    <div className="addnormal">
      <table className="table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Employee Salary</th>
            <th>Joining Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h4>{data.name}</h4>
            </td>
            <td>
              <h4>{data.id}</h4>
            </td>
            <td>
              <h4>{data.salary}</h4>
            </td>
            <td>
              <h4>{data.empJoining}</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default addnormal;
