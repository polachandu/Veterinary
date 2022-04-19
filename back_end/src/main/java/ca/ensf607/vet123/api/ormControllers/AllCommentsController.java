
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
class AllCommentsController {

  private final AllCommentsReviewRepository repository;

  AllCommentsController(AllCommentsReviewRepository repository) {
	  super();
    this.repository = repository;
  }

    
  
  @GetMapping("/all-comments")
  List<AllComments> all() {
    return repository.findAll();
  }
 

  @PostMapping("/all-comments")
  AllComments newRequest(@RequestBody AllComments newRequest) {
			  return repository.save(newRequest);
  }


  @GetMapping("/all-comments/{id}")
  AllComments one(@PathVariable Long id) {
    
    return repository.findById(id)
      .orElseThrow(() -> new AllCommentsReviewNotFoundException(id));
  }

  @PutMapping("/all-comments/{id}")
  AllComments replaceRequest(@RequestBody AllComments newRequest, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(request -> {
    	  request.setAnimalID(newRequest.getAnimalID());
    	  
    	  
    	  request.setCommentsR(newRequest.getCommentsR());
    	  
    	  
    	  request.setUserID(newRequest.getUserID());
    	  
    	  
    	  request.setCommentorName(newRequest.getCommentorName());
    	  
    	  
    	  request.setDate(newRequest.getDate());
    
    	      	  
    	  
    	  return repository.save(request);
           
      })
      .orElseGet(() -> {
    	  newRequest.setId(id);
        return repository.save(newRequest);
      });
  }

  @DeleteMapping("/all-comments/{id}")
  void deleteAnimalRequest(@PathVariable Long id) {
    repository.deleteById(id);
  }
}