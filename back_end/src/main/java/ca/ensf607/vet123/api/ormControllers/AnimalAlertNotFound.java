package ca.ensf607.vet123.api.ormControllers;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
class AnimalRecNotFoundAdvice {

  @ResponseBody
  @ExceptionHandler(AnimalAlertNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  String animalPrescriptionNotFoundHandler(AnimalAlertNotFoundException ex) {
    return ex.getMessage();
  }
}