package ca.ensf607.vet123.api.ormControllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.*;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/v1/")
class AnimalRecController {

  private final AnimalRecRepository repository;

  AnimalRecController(AnimalRecRepository repository) {
	  super();
    this.repository = repository;
  }

    
  
  @GetMapping("/animal")
  List<AnimalRec> all() {
    return repository.findAll();
  }
 

  @PostMapping("/animal")
  AnimalRec newRequest(@RequestBody AnimalRec newRequest) {
			  return repository.save(newRequest);
  }


  @GetMapping("/animal/{id}")
  AnimalRec one(@PathVariable Long id) {
    
    return repository.findById(id)
      .orElseThrow(() -> new AnimalRecNotFoundException(id));
  }

  @PutMapping("/animal/{id}")
  AnimalRec replaceRequest(@RequestBody AnimalRec newRequest, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(request -> {
    	  request.setAnimalId(newRequest.getAnimalId());
    			
    	  request.setSex(newRequest.getSex());
    	  request.setSpecies(newRequest.getSpecies());
    	  request.setWeight(newRequest.getWeight());
    	  
    	  request.setBreed(newRequest.getBreed());
    	  
    	  request.setCityTatoo(newRequest.getCityTatoo());
    	  request.setAnimalAvailability(newRequest.getAnimalAvailability());
    	  
    	  request.setUserID(newRequest.getUserID());
    	  return repository.save(request);
           
      })
      .orElseGet(() -> {
    	  newRequest.setId(id);
        return repository.save(newRequest);
      });
  }

  @DeleteMapping("/animal/{id}")
  void deleteAnimalRequest(@PathVariable Long id) {
    repository.deleteById(id);
  }
}