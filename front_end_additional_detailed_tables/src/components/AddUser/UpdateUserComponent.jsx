import React, { Component } from 'react'
import UserService from '../../services/UserService';

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            userId: '',
            userName: '',
            userRole: '',
            userEmail: ''
        }
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeUserRoleHandler = this.changeUserRoleHandler.bind(this);
        this.changeUserEmailHandler = this.changeUserEmailHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( (res) =>{
            let user = res.data;
            this.setState({userId: user.userId,
                userName: user.userName,
                userRole: user.userRole,
                userEmail : user.userEmail
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {userId: this.state.userId, userName: this.state.userName, userRole: this.state.userRole, userEmail: this.state.userEmail};
        console.log('user => ' + JSON.stringify(user));
        console.log('id => ' + JSON.stringify(this.state.id));
        UserService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/users');
        });
    }
    
    changeUserIdHandler= (event) => {
        this.setState({userId: event.target.value});
    }

    changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changeUserRoleHandler= (event) => {
        this.setState({userRole: event.target.value});
    }

    changeUserEmailHandler= (event) => {
        this.setState({userEmail: event.target.value});
    }

    cancel(){
        this.props.history.push('/users');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update User</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> User Id: </label>
                                            <input placeholder="User Id" name="userId" className="form-control" 
                                                value={this.state.userId} onChange={this.changeUserIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> User Name: </label>
                                            <input placeholder="User Name" name="userName" className="form-control" 
                                                value={this.state.userName} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Role: </label>
                                            <input placeholder="User Role" name="userRole" className="form-control" 
                                                value={this.state.userRole} onChange={this.changeUserRoleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="userEmail" className="form-control" 
                                                value={this.state.userEmail} onChange={this.changeUserEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>
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

export default UpdateUserComponent
