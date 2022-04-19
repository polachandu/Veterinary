import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                    <div><a href="http://localhost:3000/home" className="navbar-brand">Back</a></div>
                    <div><a href="http://localhost:3001/animal-list" className="navbar-brand">Animal List</a></div>
                    <div><a href="http://localhost:3001/prescription-list" className="navbar-brand">Prescriptions</a></div>

                    <div><a href="http://localhost:3001/alert-lists" className="navbar-brand" >Alert</a></div>
                    <div><a href="http://localhost:3001/comment-list" className="navbar-brand" >Comments</a></div>

                    <div><a href="http://localhost:3001/student-comment-list" className="navbar-brand" >Student Comments</a></div>

                    <div><a href="http://localhost:3001/users" className="navbar-brand" >Manage User</a></div>

                    <div><a href="http://localhost:3001/statuses-lists" className="navbar-brand" >Animal Request</a></div>

                    <div><a href="http://localhost:3001/students" className="navbar-brand" >Student Management</a></div>


                    </nav>



                    
                </header>
            </div>
        )
    }
}

export default HeaderComponent
