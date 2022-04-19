import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListAnimalComponent from './components/Animals/ListAnimalComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateAnimalComponent from './components/Animals/CreateAnimalComponent';
import UpdateAnimalComponent from './components/Animals/UpdateAnimalComponent';
import ViewAnimalComponent from './components/Animals/ViewAnimalComponent';

import ListPrescriptionComponent from './components/Prescription/ListPrescriptionComponent';
import CreatePrescriptionComponent from './components/Prescription/CreatePrescriptionComponent';
import ViewPrescriptionComponent from './components/Prescription/ViewPrescriptionComponent';

import ListAlertingComponent from './components/Alert/ListAlertingComponent';
import CreateAlertingComponent from './components/Alert/CreateAlertingComponent';
import ViewAlertingComponent from './components/Alert/ViewAlertingComponent';

import ListCommentedComponent from './components/CommentSection/ListCommentedComponent';
import CreateCommentedComponent from './components/CommentSection/CreateCommentedComponent';
import ViewCommentedComponent from './components/CommentSection/ViewCommentedComponent';

import ListStuCommentComponent from './components/StudentComment/ListStuCommentComponent';
import CreateStuCommentComponent from './components/StudentComment/CreateStuCommentComponent';
import ViewStuCommentComponent from './components/StudentComment/ViewStuCommentComponent';

import ListUserComponent from './components/AddUser/ListUserComponent';
import CreateUserComponent from './components/AddUser/CreateUserComponent';
import ViewUserComponent from './components/AddUser/ViewUserComponent';

import ListAnimalStatComponent from './components/AnimStat/ListAnimalStatComponent';
import CreateAnimalStatComponent from './components/AnimStat/CreateAnimalStatComponent';
import ViewAnimalStatComponent from './components/AnimStat/ViewAnimalStatComponent';

import ListStudentComponent from './components/StudentManage/ListStudentComponent';
import CreateStudentComponent from './components/StudentManage/CreateStudentComponent';
import ViewStudentComponent from './components/StudentManage/ViewStudentComponent';


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListAnimalComponent}></Route>
                          <Route path = "/animal-list" component = {ListAnimalComponent}></Route>
                          <Route path = "/Prescription-list" component = {ListPrescriptionComponent}></Route>
                          
                          <Route path = "/add-animals/:id" component = {CreateAnimalComponent}></Route>
                          <Route path = "/view-animals/:id" component = {ViewAnimalComponent}></Route>
                          
                          <Route path = "/Prescription-list" component = {ListPrescriptionComponent}></Route>
                          <Route path = "/add-presciption/:id" component = {CreatePrescriptionComponent}></Route>
                          <Route path = "/view-presciption/:id" component = {ViewPrescriptionComponent}></Route>


                          <Route path = "/alert-lists" component = {ListAlertingComponent}></Route>
                          <Route path = "/add-alerts/:id" component = {CreateAlertingComponent}></Route>
                          <Route path = "/view-alerts/:id" component = {ViewAlertingComponent}></Route> 


                          <Route path = "/comment-list" component = {ListCommentedComponent}></Route>
                          <Route path = "/add-comment/:id" component = {CreateCommentedComponent}></Route>
                          <Route path = "/view-comment/:id" component = {ViewCommentedComponent}></Route> 


                          <Route path = "/student-comment-list" component = {ListStuCommentComponent}></Route>
                          <Route path = "/add-student-comment/:id" component = {CreateStuCommentComponent}></Route>
                          <Route path = "/view-student-comment/:id" component = {ViewStuCommentComponent}></Route> 


                          <Route path = "/users" component = {ListUserComponent}></Route>
                          <Route path = "/add-user/:id" component = {CreateUserComponent}></Route>
                          <Route path = "/view-user/:id" component = {ViewUserComponent}></Route> 


                          <Route path = "/statuses-lists" component = {ListAnimalStatComponent}></Route>
                          <Route path = "/add-status/:id" component = {CreateAnimalStatComponent}></Route>
                          <Route path = "/view-status/:id" component = {ViewAnimalStatComponent}></Route> 

                          <Route path = "/students" component = {ListStudentComponent}></Route>
                          <Route path = "/add-student/:id" component = {CreateStudentComponent}></Route>
                          <Route path = "/view-student/:id" component = {ViewStudentComponent}></Route> 







                          
                          {/* <Route path = "/update-employee/:id" component = {UpdateAnimalComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
