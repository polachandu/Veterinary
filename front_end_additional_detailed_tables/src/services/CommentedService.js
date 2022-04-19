import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/all-comments";

class CommentedService {

    getCommenteds(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createCommented(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getCommentedById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateCommented(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteCommented(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new CommentedService()