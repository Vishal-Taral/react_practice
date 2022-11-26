import './school.css'
import Classroom from './classroom'

let school = (props) => {
    return (
        <div className="school">
            <h1>Students data</h1>
            <Classroom/>
            <table>
                <thead>
                    <tr>
                        <td>Roll No</td>
                        <td>Student Name</td>
                        <td>Student subject</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.name}</td>
                        <td>{props.number}</td>
                        <td>{props.sub}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default school;