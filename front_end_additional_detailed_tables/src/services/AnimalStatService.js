import axios from 'axios';

const ANIMAST_API_BASE_URL = "http://localhost:8080/api/v1/animal-status";

class AnimalStatService {

    getAnimalStats(){
        return axios.get(ANIMAST_API_BASE_URL);
    }

    createAnimalStat(employee){
        return axios.post(ANIMAST_API_BASE_URL, employee);
    }

    getAnimalStatById(employeeId){
        return axios.get(ANIMAST_API_BASE_URL + '/' + employeeId);
    }

    updateAnimalStat(employee, employeeId){
        return axios.put(ANIMAST_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteAnimalStat(employeeId){
        return axios.delete(ANIMAST_API_BASE_URL + '/' + employeeId);
    }
}

export default new AnimalStatService()