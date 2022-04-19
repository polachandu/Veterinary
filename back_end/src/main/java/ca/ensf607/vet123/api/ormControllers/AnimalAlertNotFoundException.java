package ca.ensf607.vet123.api.ormControllers;


class AnimalAlertNotFoundException extends RuntimeException {

	AnimalAlertNotFoundException(Long prescriptionId) {
    super("Could not find the prescription id " + prescriptionId);
  }
}