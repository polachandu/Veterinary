
package ca.ensf607.vet123.api.ormControllers;


class AllCommentsReviewNotFoundException extends RuntimeException {

	AllCommentsReviewNotFoundException(Long commentsReviewId) {
    super("Could not find the prescription id " + commentsReviewId);
  }
}