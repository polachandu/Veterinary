import React, { Component } from 'react'
import PrescriptionService from '../../services/PrescriptionService'

class ViewPrescriptionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        PrescriptionService.getPrescriptionById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Prescription Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Prescription ID:  </label>
                            <div> { this.state.employee.id }</div>
                        </div>
                        <div className = "row">
                            <label> Animal ID :  </label>
                            <div> { this.state.employee.animalID}</div>
                        </div>
                        <div className = "row">
                            <label> Record Entered by (ID Number) :  </label>
                            <div> { this.state.employee.userID }</div>
                     
                        </div>

                        <div className = "row">
                            <label> Prescription Date :  </label>
                            <div> { this.state.employee.date }</div>
                            
                            </div>


                            <div className = "row">
                            <label> Problem :  </label>
                            <div> { this.state.employee.problem }</div>
                            
                            </div>


                            <div className = "row">
                            <label> Diagnosis :  </label>
                            <div> { this.state.employee.diagnose }</div>
                            
                            </div>

                            <div className = "row">
                            <label> Drug Name :  </label>
                            <div> { this.state.employee.drugName }</div>
                            
                            </div>

                            <div className = "row">
                            <label> Drug ID :  </label>
                            <div> { this.state.employee.drugID }</div>
                            
                            </div>

                            <div className = "row">
                            <label> Dosage :  </label>
                            <div> { this.state.employee.dosage }</div>
                            
                            </div>



                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPrescriptionComponent
