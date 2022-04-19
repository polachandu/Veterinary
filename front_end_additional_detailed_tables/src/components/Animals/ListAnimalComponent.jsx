import React, { Component } from 'react'
import AnimalService from '../../services/AnimalService'

class ListAnimalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addAnimal = this.addAnimal.bind(this);
        this.editAnimal = this.editAnimal.bind(this);
        this.deleteAnimal = this.deleteAnimal.bind(this);
    }

    deleteAnimal(id){
        AnimalService.deleteAnimal(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewAnimal(id){
        this.props.history.push(`/view-animals/${id}`);
    }
    editAnimal(id){
        this.props.history.push(`/add-animals/${id}`);
    }

    componentDidMount(){
        AnimalService.getAnimals().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addAnimal(){
        this.props.history.push('/add-animals/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Animals List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addAnimal}> Add Animal</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> record ID</th>
                                    <th> Animal Breed</th>
                                    <th> Animal ID</th>
                                    <th> Sex</th>
                                    <th> Species</th>
                                    <th> Weight</th>
                                    <th> Animal Availability</th>
                                    <th> City Tatoo</th>
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
                                             <td> {employee.breed} </td>   
                                             <td> {employee.animalId}</td>
                                             <td> {employee.sex}</td>
                                             <td> {employee.species}</td>
                                             <td> {employee.weight}</td>
                                             <td> {employee.animalAvailability}</td>
                                             <td> {employee.cityTatoo}</td>
                                             <td> {employee.userID}</td>
                                            

                                             <td>
                                                 <button onClick={ () => this.editAnimal(employee.id)} className="btn btn-info">Modify </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAnimal(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewAnimal(employee.id)} className="btn btn-info">View </button>
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

export default ListAnimalComponent
