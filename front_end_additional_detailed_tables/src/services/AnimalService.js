import axios from 'axios';

const ANIMALS_API_BASE_URL = "http://localhost:8080/api/v1/animal";

class AnimalService {

    getAnimals(){
        return axios.get(ANIMALS_API_BASE_URL);
    }

    createAnimal(animal){
        return axios.post(ANIMALS_API_BASE_URL, animal);
    }

    getAnimalById(animalId){
        return axios.get(ANIMALS_API_BASE_URL + '/' + animalId);
    }

    updateAnimal(animal, animalId){
        return axios.put(ANIMALS_API_BASE_URL + '/' + animalId, animal);
    }

    deleteAnimal(animalId){
        return axios.delete(ANIMALS_API_BASE_URL + '/' + animalId);
    }
}

export default new AnimalService()