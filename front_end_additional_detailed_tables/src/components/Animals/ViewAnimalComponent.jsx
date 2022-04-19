import React, { Component } from 'react'
import AnimalService from '../../services/AnimalService'

class ViewAnimalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        AnimalService.getAnimalById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Animal Record Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Animal Breed:  </label>
                            <div> { this.state.employee.breed }</div>
                        </div>
                        <div className = "row">
                            <label> Animal ID :  </label>
                            <div> { this.state.employee.animalId}</div>
                        </div>
                        <div className = "row">
                            <label> Sex :  </label>
                            <div> { this.state.employee.sex }</div>
                     
                        </div>

                        <div className = "row">
                            <label> Species : </label>
                            <div> { this.state.employee.species }</div>
                            </div>




                            <div className = "row">
                            <label> Weight :  </label>
                            <div> { this.state.employee.weight }</div>
                            </div>




                            <div className = "row">
                            <label> Animal Availability :  </label>
                            <div> { this.state.employee.animalAvailability}</div>
                            </div>

                            <div className = "row">
                            <label> City Tatoo:  </label>
                            <div> { this.state.employee.cityTatoo}</div>
                            </div>



                        <div className = "row">
                            <label> Record Entered By (User ID):  </label>
                            <div> { this.state.employee.userID }</div>
                            </div>


                    </div>

                </div>
            </div>
        )
    }
}

export default ViewAnimalComponent
