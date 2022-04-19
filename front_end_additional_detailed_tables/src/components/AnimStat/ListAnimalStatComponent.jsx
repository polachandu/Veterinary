import React, { Component } from 'react'
import AnimalStatService from '../../services/AnimalStatService'

class ListAnimalStatComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addAnimalStat = this.addAnimalStat.bind(this);
        this.editAnimalStat = this.editAnimalStat.bind(this);
        this.deleteAnimalStat = this.deleteAnimalStat.bind(this);
    }

    deleteAnimalStat(id){
        AnimalStatService.deleteAnimalStat(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewAnimalStat(id){
        this.props.history.push(`/view-status/${id}`);
    }
    editAnimalStat(id){
        this.props.history.push(`/add-status/${id}`);
    }

    componentDidMount(){
        AnimalStatService.getAnimalStats().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addAnimalStat(){
        this.props.history.push('/add-status/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Animal Request List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addAnimalStat}> Add Request</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Animal ID</th>
                                    <th> Date Needed</th>
                                    <th> Date Requested</th>
                                    <th> Status</th>
                                    <th> Accepted/Rejected By</th>
                                    <th> Requested By ID</th>
                                                           
                                                                       
                                    <th> Actions</th>

                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                            <td> {employee.animalID}</td>
                                             <td> {employee.dateNeeded} </td>   
                                             <td> {employee.dateOrdered}</td>
                                             <td> {employee.accept}</td>
                                             <td> {employee.acceptedByID}</td>
                                             <td> {employee.orderedByID}</td>
                                            
                                            

                                             <td>
                                                 <button onClick={ () => this.editAnimalStat(employee.id)} className="btn btn-info">Modify </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAnimalStat(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewAnimalStat(employee.id)} className="btn btn-info">View </button>
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

export default ListAnimalStatComponent
