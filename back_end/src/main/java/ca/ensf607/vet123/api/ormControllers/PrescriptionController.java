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
class PrescriptionController {

  private final PrescriptionRepository repository;

  PrescriptionController(PrescriptionRepository repository) {
	  super();
    this.repository = repository;
  }

    
  
  @GetMapping("/animal-prescription")
  List<PrescriptionRecords> all() {
    return repository.findAll();
  }
 

  @PostMapping("/animal-prescription")
  PrescriptionRecords newRequest(@RequestBody PrescriptionRecords newRequest) {
			  return repository.save(newRequest);
  }


  @GetMapping("/animal-prescription/{id}")
  PrescriptionRecords one(@PathVariable Long id) {
    
    return repository.findById(id)
      .orElseThrow(() -> new PrescriptionNotFoundException(id));
  }

  @PutMapping("/animal-prescription/{id}")
  PrescriptionRecords replaceRequest(@RequestBody PrescriptionRecords newRequest, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(request -> {
    	  request.setAnimalID(newRequest.getAnimalID());
    	  request.setUserID(newRequest.getUserID());
    	  
    	      	  
    	  request.setDosage(newRequest.getDosage());
    	  request.setDrugID(newRequest.getDrugID());
    	  
    	  request.setDrugName(newRequest.getDrugName());
    	  
    	request.setDate(newRequest.getDate());
    	request.setDiagnose(newRequest.getDiagnose());
    	request.setProblem(newRequest.getProblem());
    	  
    	      	  
    	  
    	  return repository.save(request);
           
      })
      .orElseGet(() -> {
    	  newRequest.setId(id);
        return repository.save(newRequest);
      });
  }

  @DeleteMapping("/animal-prescription/{id}")
  void deleteAnimalRequest(@PathVariable Long id) {
    repository.deleteById(id);
  }
}