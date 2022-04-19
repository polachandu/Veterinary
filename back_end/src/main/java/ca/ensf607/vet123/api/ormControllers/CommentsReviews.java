


package ca.ensf607.vet123.api.ormControllers;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity

class CommentsReviews {

	private @Id @GeneratedValue Long id;
  
  
  
  private int userID;
 
  private String date;
   
  private String commentsR;
  
  private String studentName;
  
  private int animalID;
  

 


  
  CommentsReviews() {}

  CommentsReviews(int userID, int animalID, String date, String commentsR, String studentName) {

	 
	

	  this.userID = userID;
       
	  this.date = date;
    	 	  
	  this.commentsR = commentsR;
	  
	  this.studentName = studentName;
	  
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

public String getStudentName() {
	return studentName;
}

public void setStudentName(String studentName) {
	this.studentName = studentName;
}

@Override
  public boolean equals(Object o) {

    if (this == o)
      return true;
    if (!(o instanceof CommentsReviews))
      return false;
    CommentsReviews review = (CommentsReviews) o;
    return Objects.equals(this.userID, review.userID) && Objects.equals(this.studentName, review.studentName)
        && Objects.equals(this.commentsR, review.commentsR) && Objects.equals(this.date, review.date) && Objects.equals(this.animalID, review.animalID)     ;
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.userID, this.commentsR, this.date, this.studentName, this.animalID);
  }

//  @Override
//  public String toString() {
//    return "AnimalRequest{" + "id=" + this.id + ", comments='" + this.commentsR + ", animalID='" +this.animalID+'\'' + ", drugID='" + this.studentID + ", problem='" + this.problem  + ", drugName='" + this.studentName }';
//  }
}