import React, { Component } from 'react'
import StudentService from '../../services/StudentService';

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            studentId: '',
            studentName: '',
            studentEmail: ''
        }
        this.changeStudentIdHandler = this.changeStudentIdHandler.bind(this);
        this.changeStudentNameHandler = this.changeStudentNameHandler.bind(this);
        this.changeStudentEmailHandler = this.changeStudentEmailHandler.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({studentId: student.studentId,
                    studentName: student.studentName,
                    studentEmail : student.studentEmail
                });
            });
        }        
    }
    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {studentId: this.state.studentId, studentName: this.state.studentName, studentEmail: this.state.studentEmail};
        console.log('student => ' + JSON.stringify(student));

        // step 5
        if(this.state.id === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/students');
            });
        }else{
            StudentService.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/students');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
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

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
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

export default CreateStudentComponent
