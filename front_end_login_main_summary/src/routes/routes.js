import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Layout } from '../components/common-components/common-components';
import Details from '../modules/details';
import TeachingTech from '../modules/teching-tech/teaching-tech';
import StudentViewComments from '../modules/student/student-summary';
import AnimalCareAttendant from '../modules/animal-care-attendant/aca-details';
import Home from '../modules/home';
import Login from '../modules/login';
export default function Links() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/home" element={<Home/>} />
                    <Route exact path="/summary" element={<Details />} />
                    <Route exact path="/teaching-tech" element={<TeachingTech />} />
                    <Route exact path="/student" element={<StudentViewComments />} />
                    <Route exact path="/animal-care-attendant" element={<AnimalCareAttendant />} />
                </Routes>
            </Layout>
        </Router>
    )
}
