import React, { Component } from 'react'
import CommentedService from '../../services/CommentedService'

class ViewCommentedComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        CommentedService.getCommentedById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Comments Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Comment ID:  </label>
                            <div> { this.state.employee.id }</div>
                        </div>
                        <div className = "row">
                            <label> Animal ID :  </label>
                            <div> { this.state.employee.animalID}</div>
                        </div>
                        
                        
                        <div className = "row">
                            <label> Comment :  </label>
                            <div> { this.state.employee.commentsR }</div>
                            
                            </div>
                        
                        
                        <div className = "row">
                            <label> Comment Entered by (ID Number) :  </label>
                            <div> { this.state.employee.userID }</div>
                     
                        </div>

                        <div className = "row">
                            <label> Date Date :  </label>
                            <div> { this.state.employee.date }</div>
                            
                            </div>

                            <div className = "row">
                            <label> Commented By :  </label>
                            <div> { this.state.employee.commentorName }</div>
                            
                            </div>
                                                  



                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCommentedComponent
