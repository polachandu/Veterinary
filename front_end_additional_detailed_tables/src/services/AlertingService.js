import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/animal-alert";

class AlertingService {

    getAlertings(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createAlerting(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getAlertingById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateAlerting(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteAlerting(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new AlertingService()