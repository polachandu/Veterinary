import React, { Component } from 'react'
import AnimalStatService from '../../services/AnimalStatService';

class CreateAnimalStatComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            dateNeeded: '',
            animalID: '',
            dateOrdered: '',
            accept:'',
            orderedByID:'',
            acceptedByID:''


        }
        this.changedateNeededHandler = this.changedateNeededHandler.bind(this);
        this.changeanimalIDHandler = this.changeanimalIDHandler.bind(this);
              
        this.saveOrUpdateOrderedAnimalStat = this.saveOrUpdateOrderedAnimalStat.bind(this);
       
        this.changeacceptHandler = this.changeacceptHandler.bind(this);

        this.changeorderedByIDHandler = this.changeorderedByIDHandler.bind(this);

        this.changeacceptedByIDHandler = this.changeacceptedByIDHandler.bind(this);
        
        this.changedateOrderedHandler = this.changedateOrderedHandler.bind(this);



    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            AnimalStatService.getAnimalStatById(this.state.id).then( (res) =>{
                let AnimalStat = res.data;
                this.setState({dateNeeded: AnimalStat.dateNeeded,
                    animalID: AnimalStat.animalID,
                    dateOrdered : AnimalStat.dateOrdered,
                    accept:AnimalStat.accept,
                    orderedByID: AnimalStat.orderedByID,
                    acceptedByID:AnimalStat.acceptedByID

                });
            });
        }        
    }
    saveOrUpdateOrderedAnimalStat = (e) => {
        e.preventDefault();
        let AnimalStat = {dateNeeded: this.state.dateNeeded, animalID: this.state.animalID, dateOrdered: this.state.dateOrdered, accept: this.state.accept,orderedByID: this.state.orderedByID, acceptedByID: this.state.acceptedByID };
        console.log('AnimalStat => ' + JSON.stringify(AnimalStat));

        // step 5
        if(this.state.id === '_add'){
            AnimalStatService.createAnimalStat(AnimalStat).then(res =>{
                this.props.history.push('/statuses-lists');
            });
        }else{
            AnimalStatService.updateAnimalStat(AnimalStat, this.state.id).then( res => {
                this.props.history.push('/statuses-lists');
            });
        }
    }
    
    changedateNeededHandler= (event) => {
        this.setState({dateNeeded: event.target.value});
    }

    changeanimalIDHandler= (event) => {
        this.setState({animalID: event.target.value});
    }

    changedateOrderedHandler= (event) => {
        this.setState({dateOrdered: event.target.value});
    }

   
    changeacceptHandler= (event) => {
        this.setState({accept: event.target.value});
    }


    changeorderedByIDHandler= (event) => {
        this.setState({orderedByID: event.target.value});
    }


    changeacceptedByIDHandler= (event) => {
        this.setState({acceptedByID: event.target.value});
    }
   
   
   




    cancel(){
        this.props.history.push('/statuses-lists');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Status</h3>
        }else{
            return <h3 className="text-center">Update Status</h3>
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
                                       
                                    <label> SECTION BELOW TO BE FILLED BY REQUESTER </label>
                                    

                                    <div className = "form-group">
                                            <label> Animal ID: </label>
                                            <input placeholder="Animal ID" orderedByID="animalID" className="form-control" 
                                                value={this.state.animalID} onChange={this.changeanimalIDHandler}/>
                                        </div>


                                        <div className = "form-group">
                                            <label> Animal Date Needed : </label>
                                            <input placeholder="Date Needed" orderedByID="dateNeeded" className="form-control" 
                                                value={this.state.dateNeeded} onChange={this.changedateNeededHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Order Placed by (ID): </label>
                                            <input placeholder="ID" orderedByID="orderedByID" className="form-control" 
                                                value={this.state.orderedByID} onChange={this.changeorderedByIDHandler}/>
                                        </div>

         
                                



                                        <div className = "form-group">
                                            <label> Date Order Placed : </label>
                                            <input placeholder="Date ordered" orderedByID="dateOrdered" className="form-control" 
                                                value={this.state.dateOrdered} onChange={this.changedateOrderedHandler}/>
                                        </div>
                                      
                                        <label> SECTION BELOW TO BE FILLED BY VALIDATOR </label>

                                        
                                        <div className = "form-group">
                                            <label> Accepted or Rejected Status </label>
                                            <input placeholder="Status" orderedByID="accept" className="form-control" 
                                                value={this.state.accept} onChange={this.changeacceptHandler}/>
                                        </div>


                                        

                                        <div className = "form-group">
                                            <label> Accepted or Rejected by (User ID): </label>
                                            <input placeholder="Validator ID" orderedByID="acceptedByID" className="form-control" 
                                                value={this.state.acceptedByID} onChange={this.changeacceptedByIDHandler}/>
                                        </div>


                                        <button className="btn btn-success" onClick={this.saveOrUpdateOrderedAnimalStat}>Save</button>
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

export default CreateAnimalStatComponent
