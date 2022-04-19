import React, { Component } from 'react'
import StudentService from '../../services/StudentService';

class UpdateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            studentId: '',
            studentName: '',
            studentEmail: ''
        }
        this.changeStudentIdHandler = this.changeStudentIdHandler.bind(this);
        this.changeStudentNameHandler = this.changeStudentNameHandler.bind(this);
        this.changeStudentEmailHandler = this.changeStudentEmailHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( (res) =>{
            let student = res.data;
            this.setState({studentId: student.studentId,
                studentName: student.studentName,
                studentEmail : student.studentEmail
            });
        });
    }

    updateStudent = (e) => {
        e.preventDefault();
        let student = {studentId: this.state.studentId, studentName: this.state.studentName, studentEmail: this.state.studentEmail};
        console.log('student => ' + JSON.stringify(student));
        console.log('id => ' + JSON.stringify(this.state.id));
        StudentService.updateStudent(student, this.state.id).then( res => {
            this.props.history.push('/students');
        });
    }
    
    changeStudentIdHandler= (event) => {
        this.setState({studentId: event.target.value});
    }

    changeStudentNameHandler= (event) => {
        this.setState({studentName: event.target.value});
    }

    changeStudentEmailHandler= (event) => {
        this.setState({studentEmail: event.target.value});
    }

    cancel(){
        this.props.history.push('/students');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Student</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Student ID: </label>
                                            <input placeholder="Student ID" name="studentId" className="form-control" 
                                                value={this.state.studentId} onChange={this.changeStudentIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Student Name: </label>
                                            <input placeholder="Student Name" name="studentName" className="form-control" 
                                                value={this.state.studentName} onChange={this.changeStudentNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Address: </label>
                                            <input placeholder="Email Address" name="studentEmail" className="form-control" 
                                                value={this.state.studentEmail} onChange={this.changeStudentEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateStudent}>Save</button>
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

export default UpdateStudentComponent
