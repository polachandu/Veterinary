import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/comments-reviews";

class StuCommentService {

    getStuComments(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createStuComment(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getStuCommentById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateStuComment(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteStuComment(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new StuCommentService()