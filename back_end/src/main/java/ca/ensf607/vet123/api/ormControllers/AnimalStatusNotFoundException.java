
package ca.ensf607.vet123.api.ormControllers;


class AnimalStatusNotFoundException extends RuntimeException {

	AnimalStatusNotFoundException(Long commentsReviewId) {
    super("Could not find the prescription id " + commentsReviewId);
  }
}