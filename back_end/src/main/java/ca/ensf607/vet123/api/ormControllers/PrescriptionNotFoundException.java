
package ca.ensf607.vet123.api.ormControllers;



class PrescriptionNotFoundException extends RuntimeException {

	PrescriptionNotFoundException(Long prescriptionId) {
    super("Could not find the prescription id " + prescriptionId);
  }
}