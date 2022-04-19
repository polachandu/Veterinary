import React, { Component } from 'react'
import AlertingService from '../../services/AlertingService'

class ListAlertingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addAlerting = this.addAlerting.bind(this);
        this.editAlerting = this.editAlerting.bind(this);
        this.deleteAlerting = this.deleteAlerting.bind(this);
    }

    deleteAlerting(id){
        AlertingService.deleteAlerting(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewAlerting(id){
        this.props.history.push(`/view-alerts/${id}`);
    }
    editAlerting(id){
        this.props.history.push(`/add-alerts/${id}`);
    }

    componentDidMount(){
        AlertingService.getAlertings().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addAlerting(){
        this.props.history.push('/add-alerts/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Alert List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addAlerting}> Add Alert</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> record ID</th>
                                    <th> Reminder</th>
                                    <th> Animal ID</th>
                                    <th> Date</th>
                                    <th> Name</th>
                                    <th> Alert</th>
                                    <th> Role</th>
                                    <th> UserID </th>
                                    
                                    
                                    <th> Actions</th>

                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                            <td> {employee.id}</td>
                                             <td> {employee.reminder} </td>   
                                             <td> {employee.animalId}</td>
                                             <td> {employee.date}</td>
                                             <td> {employee.name}</td>
                                             <td> {employee.alert}</td>
                                             <td> {employee.role}</td>
                                             <td> {employee.userID}</td>
                                            

                                             <td>
                                                 <button onClick={ () => this.editAlerting(employee.id)} className="btn btn-info">Modify </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAlerting(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewAlerting(employee.id)} className="btn btn-info">View </button>
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

export default ListAlertingComponent
