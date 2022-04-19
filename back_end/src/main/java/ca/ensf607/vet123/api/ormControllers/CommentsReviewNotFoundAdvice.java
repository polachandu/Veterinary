
package ca.ensf607.vet123.api.ormControllers;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
class CommentsReviewNotFoundAdvice {

  @ResponseBody
  @ExceptionHandler(CommentsReviewNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  String animalPrescriptionNotFoundHandler(CommentsReviewNotFoundException ex) {
    return ex.getMessage();
  }
}