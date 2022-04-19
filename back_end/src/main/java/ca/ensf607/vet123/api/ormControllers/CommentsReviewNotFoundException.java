
package ca.ensf607.vet123.api.ormControllers;


class CommentsReviewNotFoundException extends RuntimeException {

	CommentsReviewNotFoundException(Long commentsReviewId) {
    super("Could not find the prescription id " + commentsReviewId);
  }
}