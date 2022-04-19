import React, { Component } from 'react'
import AlertingService from '../../services/AlertingService';

class CreateAlertingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            reminder: '',
            animalId: '',
            date: '',
            role:'',
            alert:'',
            name:'',
            userID:''


        }
        this.changereminderHandler = this.changereminderHandler.bind(this);
        this.changeanimalIdHandler = this.changeanimalIdHandler.bind(this);
        this.saveOrUpdateAlerting = this.saveOrUpdateAlerting.bind(this);
        this.changeroleHandler = this.changeroleHandler.bind(this);
        this.changealertHandler = this.changealertHandler.bind(this);
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changeuserIDHandler = this.changeuserIDHandler.bind(this);

    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            AlertingService.getAlertingById(this.state.id).then( (res) =>{
                let Alerting = res.data;
                this.setState({reminder: Alerting.reminder,
                    animalId: Alerting.animalId,
                    date : Alerting.date,
                    role: Alerting.role,
                    alert:Alerting.alert,
                    name: Alerting.name,
                    userID:Alerting.userID

                });
            });
        }        
    }
    saveOrUpdateAlerting = (e) => {
        e.preventDefault();
        let Alerting = {reminder: this.state.reminder, animalId: this.state.animalId, date: this.state.date, role: this.state.role, alert: this.state.alert,name: this.state.name, userID: this.state.userID };
        console.log('Alerting => ' + JSON.stringify(Alerting));

        // step 5
        if(this.state.id === '_add'){
            AlertingService.createAlerting(Alerting).then(res =>{
                this.props.history.push('/alert-lists');
            });
        }else{
            AlertingService.updateAlerting(Alerting, this.state.id).then( res => {
                this.props.history.push('/alert-lists');
            });
        }
    }
    
    changereminderHandler= (event) => {
        this.setState({reminder: event.target.value});
    }

    changeanimalIdHandler= (event) => {
        this.setState({animalId: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({date: event.target.value});
    }

    changeroleHandler= (event) => {
        this.setState({role: event.target.value});
    }
    changealertHandler= (event) => {
        this.setState({alert: event.target.value});
    }


    changenameHandler= (event) => {
        this.setState({name: event.target.value});
    }


    changeuserIDHandler= (event) => {
        this.setState({userID: event.target.value});
    }


    cancel(){
        this.props.history.push('/alert-lists');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Alret</h3>
        }else{
            return <h3 className="text-center">Update Alerts</h3>
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
                                            <label> Animal reminder : </label>
                                            <input placeholder="Animal reminder" name="reminder" className="form-control" 
                                                value={this.state.reminder} onChange={this.changereminderHandler}/>
                                        </div>


                                        <div className = "form-group">
                                            <label> Animal ID: </label>
                                            <input placeholder="Animal ID" name="animalId" className="form-control" 
                                                value={this.state.animalId} onChange={this.changeanimalIdHandler}/>
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
                                            <label> Role of Alert Creator </label>
                                            <input placeholder="Role of Alert Creator" name="role" className="form-control" 
                                                value={this.state.role} onChange={this.changeroleHandler}/>
                                        </div>
                                        
                                        
                                        <div className = "form-group">
                                            <label> Alert </label>
                                            <input placeholder="Alert" name="alert" className="form-control" 
                                                value={this.state.alert} onChange={this.changealertHandler}/>
                                        </div>


                                        <div className = "form-group">
                                            <label> Name of Alert Creator </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changenameHandler}/>
                                        </div>

                                  


                                        <button className="btn btn-success" onClick={this.saveOrUpdateAlerting}>Save</button>
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

export default CreateAlertingComponent
