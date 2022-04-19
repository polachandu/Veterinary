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
class AnimalAlertController {

  private final AnimalAlertRepository repository;

  AnimalAlertController(AnimalAlertRepository repository) {
	  super();
    this.repository = repository;
  }

    
  
  @GetMapping("/animal-alert")
  List<AnimalAlert> all() {
    return repository.findAll();
  }
 

  @PostMapping("/animal-alert")
  AnimalAlert newRequest(@RequestBody AnimalAlert newRequest) {
			  return repository.save(newRequest);
  }


  @GetMapping("/animal-alert/{id}")
  AnimalAlert one(@PathVariable Long id) {
    
    return repository.findById(id)
      .orElseThrow(() -> new AnimalAlertNotFoundException(id));
  }

  @PutMapping("/animal-alert/{id}")
  AnimalAlert replaceRequest(@RequestBody AnimalAlert newRequest, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(request -> {
    	  request.setAnimalId(newRequest.getAnimalId());
    	  request.setAlert(newRequest.getAlert());
    	  request.setDate(newRequest.getDate());
    	  request.setName(newRequest.getName());
    	  request.setRole(newRequest.getRole());
    	  request.setUserID(newRequest.getUserID());
    	  request.setReminder(newRequest.getReminder());
    	  
       	  return repository.save(request);
           
      })
      .orElseGet(() -> {
    	  newRequest.setId(id);
        return repository.save(newRequest);
      });
  }

  @DeleteMapping("/animal-alert/{id}")
  void deleteAnimalRequest(@PathVariable Long id) {
    repository.deleteById(id);
  }
}