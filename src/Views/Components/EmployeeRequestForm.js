import React from "react"
import '../CSS_Components/EmployeeRequestForm.css';
import ManualForms from "./ManualForms";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeRequestForm = () => {

    const options = [ {value: "Test1", label: "Test1Label"},
                      {value: "Test2", label: "Test1Label2"}];

    return (
            <div className="EmployeeRequestFormContainer">
                <div className="FormTitle">
                    <img src='https://placehold.co/40x40' alt="FormIcon"/>
                    <p>EMPLOYMENT REQUEST FORM</p>
                </div>
                <div className="FilterArea">
                    <ManualForms Selection={1} TextLabel={"Requestor's name"} FormType={'text'} Placeholder={'Employee Name'}/>
                    <ManualForms Selection={2} TextLabel={"No. Of Headcount"} Placeholder={'No. Of Headcount'} Options={options}/>

                    <hr/>
                </div>
                <div className="TableArea">
                <Table bordered hover>
                    <thead>
                        <tr>
                        <th>Requestor's Name</th>
                        <th>No. of Headcount</th>
                        <th>Job Title</th>
                        <th>Date of Request</th>
                        <th>Status</th>
                        <th>Approver</th>
                        <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                </div>
            </div>
    )
}

export default EmployeeRequestForm;