
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


@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/api/v1/")
class AnimalStatusController {

  private final AnimalStatusRepository repository;

  AnimalStatusController(AnimalStatusRepository repository) {
	  super();
    this.repository = repository;
  }

    
  
  @GetMapping("/animal-status")
  List<AnimalStatus> all() {
    return repository.findAll();
  }
 

  @PostMapping("/animal-status")
  AnimalStatus newRequest(@RequestBody AnimalStatus newRequest) {
			  return repository.save(newRequest);
  }


  @GetMapping("/animal-status/{id}")
  AnimalStatus one(@PathVariable Long id) {
    
    return repository.findById(id)
      .orElseThrow(() -> new AnimalStatusNotFoundException(id));
  }

  @PutMapping("/animal-status/{id}")
  AnimalStatus replaceRequest(@RequestBody AnimalStatus newRequest, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(request -> {
    	  request.setAnimalID(newRequest.getAnimalID());
    	  
    	  request.setAccept(newRequest.getAccept());
    	  
    	  request.setAcceptedByID(newRequest.getAcceptedByID());
    	  
    	  
    	  request.setDateNeeded(newRequest.getDateNeeded());
    	  
    	  request.setDateOrdered(newRequest.getDateOrdered());
    	  
    	  request.setAcceptedByID(newRequest.getAcceptedByID());
    	  
    	  request.setOrderedByID(newRequest.getOrderedByID());
    	  
    	  request.setOrderedByName(newRequest.getOrderedByName());
    	  
    	  request.setDateNeeded(newRequest.getDateNeeded());
    	    
    	  
    	  
    	  
    
    	      	  
    	  
    	  return repository.save(request);
           
      })
      .orElseGet(() -> {
    	  newRequest.setId(id);
        return repository.save(newRequest);
      });
  }

  @DeleteMapping("/animal-status/{id}")
  void deleteAnimalRequest(@PathVariable Long id) {
    repository.deleteById(id);
  }
}