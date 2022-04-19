
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
class CommentsReviewController {

  private final CommentsReviewRepository repository;

  CommentsReviewController(CommentsReviewRepository repository) {
	  super();
    this.repository = repository;
  }

    
  
  @GetMapping("/comments-reviews")
  List<CommentsReviews> all() {
    return repository.findAll();
  }
 

  @PostMapping("/comments-reviews")
  CommentsReviews newRequest(@RequestBody CommentsReviews newRequest) {
			  return repository.save(newRequest);
  }


  @GetMapping("/comments-reviews/{id}")
  CommentsReviews one(@PathVariable Long id) {
    
    return repository.findById(id)
      .orElseThrow(() -> new CommentsReviewNotFoundException(id));
  }

  @PutMapping("/comments-reviews/{id}")
  CommentsReviews replaceRequest(@RequestBody CommentsReviews newRequest, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(request -> {
    	  request.setAnimalID(newRequest.getAnimalID());
    	  
    	  
    	  request.setCommentsR(newRequest.getCommentsR());
    	  
    	  
    	  request.setUserID(newRequest.getUserID());
    	  
    	  
    	  request.setStudentName(newRequest.getStudentName());
    	  
    	  
    	  request.setDate(newRequest.getDate());
    
    	      	  
    	  
    	  return repository.save(request);
           
      })
      .orElseGet(() -> {
    	  newRequest.setId(id);
        return repository.save(newRequest);
      });
  }

  @DeleteMapping("/comments-reviews/{id}")
  void deleteAnimalRequest(@PathVariable Long id) {
    repository.deleteById(id);
  }
}