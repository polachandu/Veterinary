import React, { Component } from 'react'
import PrescriptionService from '../../services/PrescriptionService'

class ListPrescriptionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addPrescription = this.addPrescription.bind(this);
        this.editPrescription = this.editPrescription.bind(this);
        this.deletePrescription = this.deletePrescription.bind(this);
    }

    deletePrescription(id){
        PrescriptionService.deletePrescription(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewPrescription(id){
        this.props.history.push(`/view-presciption/${id}`);
    }
    editPrescription(id){
        this.props.history.push(`/add-presciption/${id}`);
    }

    componentDidMount(){
        PrescriptionService.getPrescriptions().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addPrescription(){
        this.props.history.push('/add-presciption/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Prescription List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPrescription}> Add Prescription</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Presc. ID</th>
                                    <th> Problem</th>
                                    <th> Animal ID</th>
                                    <th> Date</th>
                                    <th> Drug ID</th>
                                    <th> Drug Name</th>
                                    <th> Dosage</th>
                                    <th> Diagnose</th>


                                    <th> User ID</th>  

                                    <th> Actions</th>

                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                            <td> {employee.id}</td>
                                             <td> {employee.problem} </td> 
                                             <td> {employee.animalID} </td> 
                                             <td> {employee.date}</td>
                                             <td> {employee.drugID}</td>
                                             <td> {employee.drugName}</td>
                                             <td> {employee.dosage}</td>
                                             <td> {employee.diagnose}</td>
                                             <td> {employee.userID}</td>
                                            

                                             <td>
                                                 <button onClick={ () => this.editPrescription(employee.id)} className="btn btn-info">Modify </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePrescription(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPrescription(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListPrescriptionComponent
