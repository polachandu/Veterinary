import React, { Component } from 'react'
import StuCommentService from '../../services/StuCommentService'

class ListStuCommentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addStuComment = this.addStuComment.bind(this);
        this.editStuComment = this.editStuComment.bind(this);
        this.deleteStuComment = this.deleteStuComment.bind(this);
    }

    deleteStuComment(id){
        StuCommentService.deleteStuComment(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewStuComment(id){
        this.props.history.push(`/view-student-comment/${id}`);
    }
    editStuComment(id){
        this.props.history.push(`/add-student-comment/${id}`);
    }

    componentDidMount(){
        StuCommentService.getStuComments().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addStuComment(){
        this.props.history.push('/add-student-comment/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Student Comments</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStuComment}> Add Student Comment</button>
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
                                    <th> Student Name</th>
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
                                             <td> {employee.studentName}</td>
                                             <td> {employee.userID}</td>
                                            

                                             <td>
                                                 <button onClick={ () => this.editStuComment(employee.id)} className="btn btn-info">Modify </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStuComment(employee.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewStuComment(employee.id)} className="btn btn-info">View </button>
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

export default ListStuCommentComponent
