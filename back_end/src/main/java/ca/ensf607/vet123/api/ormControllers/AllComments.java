


package ca.ensf607.vet123.api.ormControllers;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity

class AllComments {

	private @Id @GeneratedValue Long id;
  
  
  
  private int userID;
 
  private String date;
   
  private String commentsR;
  
  private String commentorName;
  
  private int animalID;
  



  
  AllComments() {}

  AllComments(int userID, int animalID, String date, String commentsR, String commentorName) {

	 
	

	  this.userID = userID;
       
	  this.date = date;
    	 	  
	  this.commentsR = commentsR;
	  
	  this.commentorName = commentorName;
	  
	  this.animalID = animalID;
	  
	
	  
	   
  }

  


public int getAnimalID() {
	return animalID;
}

public void setAnimalID(int animalID) {
	this.animalID = animalID;
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}



public int getUserID() {
	return userID;
}

public void setUserID(int userID) {
	this.userID = userID;
}

public String getDate() {
	return date;
}

public void setDate(String date) {
	this.date = date;
}

public String getCommentsR() {
	return commentsR;
}

public void setCommentsR(String commentsR) {
	this.commentsR = commentsR;
}



public String getCommentorName() {
	return commentorName;
}

public void setCommentorName(String commentorName) {
	this.commentorName = commentorName;
}

@Override
  public boolean equals(Object o) {

    if (this == o)
      return true;
    if (!(o instanceof AllComments))
      return false;
    AllComments review = (AllComments) o;
    return Objects.equals(this.userID, review.userID) && Objects.equals(this.commentorName, review.commentorName)
        && Objects.equals(this.commentsR, review.commentsR) && Objects.equals(this.date, review.date) && Objects.equals(this.animalID, review.animalID)     ;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.userID, this.commentsR, this.date, this.commentorName, this.animalID);
  }

//  @Override
//  public String toString() {
//    return "AnimalRequest{" + "id=" + this.id + ", comments='" + this.commentsR + ", animalID='" +this.animalID+'\'' + ", drugID='" + this.studentID + ", problem='" + this.problem  + ", drugName='" + this.studentName }';
//  }
}