import React from "react"
import '../CSS_Components/EmployeeRequestForm.css';
import { FormGroup , FormLabel , Field} from 'react-bootstrap';

const EmployeeRequestForm = () => {

    return (
            <div className="EmployeeRequestFormContainer">
                <div className="FormTitle">
                    <img src='https://placehold.co/40x40' alt="FormIcon"/>
                    <p>EMPLOYMENT REQUEST FORM</p>
                </div>
                <div className="FilterArea">
                    <form className="FilterGroupContainer">
                        <div className="FormGroups">
                            <label>Requestor Name</label>
                            <input type="text" placeholder="Employee Name"></input>
                        </div>
                    </form>
                    <FormGroup key={1} className='FormGroup1test'>
                    <FormLabel >Test</FormLabel >
                    </FormGroup>
                </div>
                <div className="TableArea">
                </div>
            </div>
    )
}

export default EmployeeRequestForm;