import React, { Component } from 'react'
import PrescriptionService from '../../services/PrescriptionService';

class CreatePrescriptionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            problem: '',
            animalID: '',
            date: '',
            drugID:'',
            drugName:'',
            diagnose:'',
            userID:'', 
            dosage:''



        }
        this.changeproblemHandler = this.changeproblemHandler.bind(this);
        this.changeanimalIDHandler = this.changeanimalIDHandler.bind(this);
        this.saveOrUpdatePrescription = this.saveOrUpdatePrescription.bind(this);
        this.changedrugIDHandler = this.changedrugIDHandler.bind(this);
        this.changedrugNameHandler = this.changedrugNameHandler.bind(this);
        this.changediagnoseHandler = this.changediagnoseHandler.bind(this);
        this.changeuserIDHandler = this.changeuserIDHandler.bind(this);
        this.changedosageHandler = this.changedosageHandler.bind(this);


    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            PrescriptionService.getPrescriptionById(this.state.id).then( (res) =>{
                let Animal_Prescip = res.data;
                this.setState({problem: Animal_Prescip.problem,
                    animalID: Animal_Prescip.animalID,
                    date : Animal_Prescip.date,
                    drugID: Animal_Prescip.drugID,
                    drugName:Animal_Prescip.drugName,
                    diagnose: Animal_Prescip.diagnose,
                    userID:Animal_Prescip.userID,
                    dosage:Animal_Prescip.dosage

                });
            });
        }        
    }
    saveOrUpdatePrescription = (e) => {
        e.preventDefault();
        let Animal_Prescip = {dosage:this.state.dosage, problem: this.state.problem, animalID: this.state.animalID, date: this.state.date, drugID: this.state.drugID, drugName: this.state.drugName,diagnose: this.state.diagnose, userID: this.state.userID };
        console.log('Animal_Prescip => ' + JSON.stringify(Animal_Prescip));

        // step 5
        if(this.state.id === '_add'){
            PrescriptionService.createPrescription(Animal_Prescip).then(res =>{
                this.props.history.push('/Prescription-list');
            });
        }else{
            PrescriptionService.updatePrescription(Animal_Prescip, this.state.id).then( res => {
                this.props.history.push('/Prescription-list');
            });
        }
    }

    //Prescription_list
    
    changeproblemHandler= (event) => {
        this.setState({problem: event.target.value});
    }

    changeanimalIDHandler= (event) => {
        this.setState({animalID: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({date: event.target.value});
    }

    changedrugIDHandler= (event) => {
        this.setState({drugID: event.target.value});
    }
    changedrugNameHandler= (event) => {
        this.setState({drugName: event.target.value});
    }


    changediagnoseHandler= (event) => {
        this.setState({diagnose: event.target.value});
    }


    changeuserIDHandler= (event) => {
        this.setState({userID: event.target.value});
    }
    changedosageHandler= (event) => {
        this.setState({dosage: event.target.value});
    }

    


    cancel(){
        this.props.history.push('/Prescription-list');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Prescription</h3>
        }else{
            return <h3 className="text-center">Update Prescription</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Animal problem : </label>
                                            <input placeholder="Animal problem" name="problem" className="form-control" 
                                                value={this.state.problem} onChange={this.changeproblemHandler}/>
                                        </div>


                                        <div className = "form-group">
                                            <label> Animal ID: </label>
                                            <input placeholder="Animal ID" name="animalID" className="form-control" 
                                                value={this.state.animalID} onChange={this.changeanimalIDHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> User ID: </label>
                                            <input placeholder="Record Entered By (UserID)" name="userID" className="form-control" 
                                                value={this.state.userID} onChange={this.changeuserIDHandler}/>
                                        </div>



                                        <div className = "form-group">
                                            <label> Date </label>
                                            <input placeholder="Date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changeEmailHandler}/>
                                        </div>


                                        <div className = "form-group">
                                            <label> Drug ID </label>
                                            <input placeholder="drug ID" name="drugID" className="form-control" 
                                                value={this.state.drugID} onChange={this.changedrugIDHandler}/>
                                        </div>
                                        

                                        <div className = "form-group">
                                            <label> Dosage </label>
                                            <input placeholder="dosage" name="dosage" className="form-control" 
                                                value={this.state.dosage} onChange={this.changedosageHandler}/>
                                        </div>


                                        
                                        <div className = "form-group">
                                            <label> drug Name </label>
                                            <input placeholder="drug Name" name="drug Name" className="form-control" 
                                                value={this.state.drugName} onChange={this.changedrugNameHandler}/>
                                        </div>


                                        <div className = "form-group">
                                            <label> diagnose </label>
                                            <input placeholder="diagnose" name="name" className="form-control" 
                                                value={this.state.diagnose} onChange={this.changediagnoseHandler}/>
                                        </div>

                                  


                                        <button className="btn btn-success" onClick={this.saveOrUpdatePrescription}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreatePrescriptionComponent
