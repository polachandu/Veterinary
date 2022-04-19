package ca.ensf607.vet123.api.ormControllers;



class AnimalRecNotFoundException extends RuntimeException {

	AnimalRecNotFoundException(Long prescriptionId) {
    super("Could not find the prescription id " + prescriptionId);
  }
}