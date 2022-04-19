import React, { Component } from 'react'
import AlertingService from '../../services/AlertingService'

class ViewAlertingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    
    componentDidMount(){
        AlertingService.getAlertingById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Alert Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Alert ID:  </label>
                            <div> { this.state.employee.id }</div>
                        </div>
                        
                        <div className = "row">
                            <label> Animal ID :  </label>
                            <div> { this.state.employee.animalId}</div>
                        </div>

                      
                        <div className = "row">
                            <label> Created By :  </label>
                            <div> { this.state.employee.userID }</div>
                     
                        </div>

                        <div className = "row">
                            <label> Name of Alert Creator :  </label>
                            <div> { this.state.employee.name }</div>
                            </div>

                            <div className = "row">
                            <label> Alert Creator ID :  </label>
                            <div> { this.state.employee.userID }</div>
                            </div>

                            <div className = "row">
                            <label> Role of Alert Creator :  </label>
                            <div> { this.state.employee.role }</div>
                            </div>

                            <div className = "row">
                            <label> Reminder:  </label>
                            <div> { this.state.employee.reminder }</div>
                            </div>



                            <div className = "row">
                            <label> Entered Date :  </label>
                            <div> { this.state.employee.date }</div>
                            </div>

                            








                    </div>

                </div>
            </div>
        )
    }
}

export default ViewAlertingComponent
