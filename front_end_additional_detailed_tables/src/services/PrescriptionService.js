import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/animal-prescription";

class PrescriptionService {

    getPrescriptions(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createPrescription(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getPrescriptionById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updatePrescription(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deletePrescription(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new PrescriptionService()