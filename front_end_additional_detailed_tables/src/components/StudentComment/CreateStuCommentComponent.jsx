import React, { Component } from 'react'
import StuCommentService from '../../services/StuCommentService';

class CreateStuCommentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            commentsR: '',
            animalID: '',
            date: '',
            studentName:'',
            userID:'', 



        }
        this.changecommentsRHandler = this.changecommentsRHandler.bind(this);
        this.changeanimalIDHandler = this.changeanimalIDHandler.bind(this);
        this.saveOrUpdateStuComment = this.saveOrUpdateStuComment.bind(this);
        this.changestudentNameHandler = this.changestudentNameHandler.bind(this);
        this.changeuserIDHandler = this.changeuserIDHandler.bind(this);


    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StuCommentService.getStuCommentById(this.state.id).then( (res) =>{
                let Animal_Prescip = res.data;
                this.setState({commentsR: Animal_Prescip.commentsR,
                    animalID: Animal_Prescip.animalID,
                    date : Animal_Prescip.date,
                   
                    studentName:Animal_Prescip.studentName,
                    userID:Animal_Prescip.userID,

                });
            });
        }        
    }
    saveOrUpdateStuComment = (e) => {
        e.preventDefault();
        let Animal_Prescip = {commentsR: this.state.commentsR, animalID: this.state.animalID, date: this.state.date, studentName: this.state.studentName, userID: this.state.userID };
        console.log('Animal_Prescip => ' + JSON.stringify(Animal_Prescip));

        // step 5
        if(this.state.id === '_add'){
            StuCommentService.createStuComment(Animal_Prescip).then(res =>{
                this.props.history.push('/student-comment-list');
            });
        }else{
            StuCommentService.updateStuComment(Animal_Prescip, this.state.id).then( res => {
                this.props.history.push('/student-comment-list');
            });
        }
    }

    
    
    changecommentsRHandler= (event) => {
        this.setState({commentsR: event.target.value});
    }

    changeanimalIDHandler= (event) => {
        this.setState({animalID: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({date: event.target.value});
    }

 
    changestudentNameHandler= (event) => {
        this.setState({studentName: event.target.value});
    }




    changeuserIDHandler= (event) => {
        this.setState({userID: event.target.value});
    }

    


    cancel(){
        this.props.history.push('/student-comment-list');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student Comments</h3>
        }else{
            return <h3 className="text-center">Update Student Comments</h3>
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
                                            <label> Student Comments: </label>
                                            <input placeholder="Student Comments" name="commentsR" className="form-control" 
                                                value={this.state.commentsR} onChange={this.changecommentsRHandler}/>
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
                                            <label> Student Name </label>
                                            <input placeholder="Student Name" name="Student Name" className="form-control" 
                                                value={this.state.studentName} onChange={this.changestudentNameHandler}/>
                                        </div>



                                  


                                        <button className="btn btn-success" onClick={this.saveOrUpdateStuComment}>Save</button>
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

export default CreateStuCommentComponent
