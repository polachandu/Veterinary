


package ca.ensf607.vet123.api.ormControllers;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity

class AnimalStatus {

	private @Id @GeneratedValue Long id;
  
  
  
  private int orderedByID;
  
  private int acceptedByID;
 
  private String dateOrdered;
  
  private String orderedByName;
  
  private String acceptedByName;
   
  private String dateNeeded;
  
  private String locationNeeded;
  
  private int animalID;
  
  private String accept;
  


  
  AnimalStatus() {}

  AnimalStatus(int orderedByID, int animalID, String dateOrdered, String dateNeeded, String locationNeeded, int acceptedByID, String accept, String acceptedByName, String orderedByName  ) {

	 
	

	  this.orderedByID = orderedByID;
       
	  this.dateOrdered = dateOrdered;
    	 	  
	  this.dateNeeded = dateNeeded;
	  
	  this.acceptedByID = acceptedByID;
	  
	  this.locationNeeded = locationNeeded;
	  
	  this.animalID = animalID;
	  
	  this.accept=accept;
	  
	  this.acceptedByName = acceptedByName;
	  
	  this.orderedByName=orderedByName;   
	
	  
	   
  }

  
  
  



public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public int getOrderedByID() {
	return orderedByID;
}

public void setOrderedByID(int orderedByID) {
	this.orderedByID = orderedByID;
}

public int getAcceptedByID() {
	return acceptedByID;
}

public void setAcceptedByID(int acceptedByID) {
	this.acceptedByID = acceptedByID;
}

public String getDateOrdered() {
	return dateOrdered;
}

public void setDateOrdered(String dateOrdered) {
	this.dateOrdered = dateOrdered;
}

public String getOrderedByName() {
	return orderedByName;
}

public void setOrderedByName(String orderedByName) {
	this.orderedByName = orderedByName;
}

public String getAcceptedByName() {
	return acceptedByName;
}

public void setAcceptedByName(String acceptedByName) {
	this.acceptedByName = acceptedByName;
}

public String getDateNeeded() {
	return dateNeeded;
}

public void setDateNeeded(String dateNeeded) {
	this.dateNeeded = dateNeeded;
}

public String getLocationNeeded() {
	return locationNeeded;
}

public void setLocationNeeded(String locationNeeded) {
	this.locationNeeded = locationNeeded;
}

public int getAnimalID() {
	return animalID;
}

public void setAnimalID(int animalID) {
	this.animalID = animalID;
}

public String getAccept() {
	return accept;
}

public void setAccept(String accept) {
	this.accept = accept;
}






@Override
  public boolean equals(Object o) {

    if (this == o)
      return true;
    if (!(o instanceof AnimalStatus))
      return false;
    AnimalStatus review = (AnimalStatus) o;
    return Objects.equals(this.orderedByID, review.orderedByID) && Objects.equals(this.locationNeeded, review.locationNeeded)
        && Objects.equals(this.dateNeeded, review.dateNeeded) && Objects.equals(this.dateOrdered, review.dateOrdered) && Objects.equals(this.animalID, review.animalID)
        && Objects.equals(this.orderedByName, review.orderedByName)  && Objects.equals(this.acceptedByID, review.acceptedByID)  && Objects.equals(this.acceptedByName, review.acceptedByName) 
        
        && Objects.equals(this.accept, review.accept);
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.orderedByID, this.dateNeeded, this.dateOrdered, this.locationNeeded, this.animalID, this.orderedByName, this.accept, this.acceptedByID, this.acceptedByName);
  }

//  @Override
//  public String toString() {
//    return "AnimalRequest{" + "id=" + this.id + ", comments='" + this.commentsR + ", animalID='" +this.animalID+'\'' + ", drugID='" + this.studentID + ", problem='" + this.problem  + ", drugName='" + this.studentName }';
//  }
}