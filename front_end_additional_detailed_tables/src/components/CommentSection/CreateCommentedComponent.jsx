import React, { Component } from 'react'
import CommentedService from '../../services/CommentedService';

class CreateCommentedComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            commentsR: '',
            animalID: '',
            date: '',
            commentorName:'',
            userID:'', 



        }
        this.changecommentsRHandler = this.changecommentsRHandler.bind(this);
        this.changeanimalIDHandler = this.changeanimalIDHandler.bind(this);
        this.saveOrUpdateCommented = this.saveOrUpdateCommented.bind(this);
        this.changecommentorNameHandler = this.changecommentorNameHandler.bind(this);
        this.changeuserIDHandler = this.changeuserIDHandler.bind(this);


    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            CommentedService.getCommentedById(this.state.id).then( (res) =>{
                let CommentG = res.data;
                this.setState({commentsR: CommentG.commentsR,
                    animalID: CommentG.animalID,
                    date : CommentG.date,
                   
                    commentorName:CommentG.commentorName,
                    userID:CommentG.userID,

                });
            });
        }        
    }
    saveOrUpdateCommented = (e) => {
        e.preventDefault();
        let CommentG = {commentsR: this.state.commentsR, animalID: this.state.animalID, date: this.state.date, commentorName: this.state.commentorName, userID: this.state.userID };
        console.log('CommentG => ' + JSON.stringify(CommentG));

        // step 5
        if(this.state.id === '_add'){
            CommentedService.createCommented(CommentG).then(res =>{
                this.props.history.push('/comment-list');
            });
        }else{
            CommentedService.updateCommented(CommentG, this.state.id).then( res => {
                this.props.history.push('/comment-list');
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

 
    changecommentorNameHandler= (event) => {
        this.setState({commentorName: event.target.value});
    }




    changeuserIDHandler= (event) => {
        this.setState({userID: event.target.value});
    }

    


    cancel(){
        this.props.history.push('/comment-list');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Comments</h3>
        }else{
            return <h3 className="text-center">Update Comments</h3>
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
                                            <label> Comments: </label>
                                            <input placeholder=" Comments" name="commentsR" className="form-control" 
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
                                            <label> Commented By </label>
                                            <input placeholder="Commented By" name="Commented By" className="form-control" 
                                                value={this.state.commentorName} onChange={this.changecommentorNameHandler}/>
                                        </div>



                                  


                                        <button className="btn btn-success" onClick={this.saveOrUpdateCommented}>Save</button>
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

export default CreateCommentedComponent
