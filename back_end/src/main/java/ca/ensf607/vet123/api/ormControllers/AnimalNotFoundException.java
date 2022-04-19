package ca.ensf607.vet123.api.ormControllers;

public class AnimalNotFoundException extends RuntimeException {

	AnimalNotFoundException(Long id) {
		super("Could not find animal with id: " + id);
	}
}
