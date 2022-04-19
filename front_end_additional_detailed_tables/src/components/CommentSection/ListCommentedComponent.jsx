import React, { Component } from 'react'
import CommentedService from '../../services/CommentedService'

class ListCommentedComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addCommented = this.addCommented.bind(this);
        this.editCommented = this.editCommented.bind(this);
        this.deleteCommented = this.deleteCommented.bind(this);
    }

    deleteCommented(id){
        CommentedService.deleteCommented(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewCommented(id){
        this.props.history.push(`/view-comment/${id}`);
    }
    editCommented(id){
        this.props.history.push(`/add-comment/${id}`);
    }

    componentDidMount(){
        CommentedService.getCommenteds().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addCommented(){
        this.props.history.push('/add-comment/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center"> Comments Section</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCommented}> Add Comment</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Comment ID</th>
                                    <th> Animal ID</th>
                                    <th> Comment</th>
                                    <th> Date </th>
                                    <th> Commented by </th>
                                    <th> User ID</th>
                                    <th> Actions</th>

                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                            <td> {employee.id}</td>
                                             <td> {employee.animalID} </td> 
                                             <td> {employee.commentsR} </td> 
                                             <td> {employee.date}</td>
                                             <td> {employee.commentorName}</td>
                                             <td> {employee.userID}</td>
                                            

                                             <td>
                                                 <button onClick={ () => this.editCommented(employee.id)} className="btn btn-info">Modify </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCommented(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCommented(employee.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCommentedComponent
