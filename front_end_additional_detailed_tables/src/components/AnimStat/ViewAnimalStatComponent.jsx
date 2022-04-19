import React, { Component } from 'react'
import AnimalStatService from '../../services/AnimalStatService'

class ViewAnimalStatComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        AnimalStatService.getAnimalStatById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Animal Request Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Animal ID:  </label>
                            <div> { this.state.employee.animalID }</div>
                        </div>
                        
                       
                        <div className = "row">
                            <label> Order Number:  </label>
                            <div> { this.state.employee.id }</div>
                            </div>
                       
                        <div className = "row">
                            <label> Status :  </label>
                            <div> { this.state.employee.accept}</div>
                        </div>

                      
                        <div className = "row">
                            <label> Date Needed :  </label>
                            <div> { this.state.employee.dateNeeded }</div>
                     
                        </div>

                        <div className = "row">
                            <label> Date Ordered :  </label>
                            <div> { this.state.employee.dateOrdered }</div>
                            </div>

                            <div className = "row">
                            <label> Ordered By (User ID) :  </label>
                            <div> { this.state.employee.orderedByID}</div>
                            </div>

                            <div className = "row">
                            <label> Accepted or Rejected By (User ID) :  </label>
                            <div> { this.state.employee.acceptedByID }</div>
                            </div>
   
                       








                    </div>

                </div>
            </div>
        )
    }
}

export default ViewAnimalStatComponent
