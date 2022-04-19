


package ca.ensf607.vet123.api.ormControllers;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity

class PrescriptionRecords {

	private @Id @GeneratedValue Long id;
  
  
  private int animalID;
  
  private int drugID;
 
  private String date;
   
  private String dosage;
  
  private String drugName;
   
  private int userID;
   
  private String diagnose;
  
  private String problem;


  
  PrescriptionRecords() {}

  PrescriptionRecords(int animalIdd, int drugID, String presMonth, String dosage, String problem, String date, int userId, String drugName, String diagnose) {

	 
	  this.animalID = animalIdd;
	  
	  this.problem = problem;

	  this.drugID = drugID;
       
	  this.date = date;
    	 	  
	  this.dosage = dosage;
	  
	  this.userID = userId;
	  
	  this.drugName = drugName;
	  
	  this.diagnose = diagnose;
	  
	   
  }

  



public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public int getAnimalID() {
	return animalID;
}

public void setAnimalID(int animalID) {
	this.animalID = animalID;
}

public int getDrugID() {
	return drugID;
}

public void setDrugID(int drugID) {
	this.drugID = drugID;
}

public String getDate() {
	return date;
}

public void setDate(String date) {
	this.date = date;
}

public String getDosage() {
	return dosage;
}

public void setDosage(String dosage) {
	this.dosage = dosage;
}

public String getDrugName() {
	return drugName;
}

public void setDrugName(String drugName) {
	this.drugName = drugName;
}

public int getUserID() {
	return userID;
}

public void setUserID(int userID) {
	this.userID = userID;
}

public String getDiagnose() {
	return diagnose;
}

public void setDiagnose(String diagnose) {
	this.diagnose = diagnose;
}

public String getProblem() {
	return problem;
}

public void setProblem(String problem) {
	this.problem = problem;
}

@Override
  public boolean equals(Object o) {

    if (this == o)
      return true;
    if (!(o instanceof PrescriptionRecords))
      return false;
    PrescriptionRecords review = (PrescriptionRecords) o;
    return Objects.equals(this.animalID, review.animalID) && Objects.equals(this.drugID, review.drugID) && Objects.equals(this.drugName, review.drugName)
        && Objects.equals(this.dosage, review.dosage) && Objects.equals(this.diagnose, review.diagnose)
        && Objects.equals(this.problem, review.problem) && Objects.equals(this.userID, review.userID );
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.animalID, this.drugID, this.dosage, this.diagnose, this.problem, this.userID, this.drugName);
  }

  @Override
  public String toString() {
    return "AnimalRequest{" + "id=" + this.id + ", dosage='" + this.dosage + ", animalID='" +this.animalID+'\'' + ", drugID='" + this.drugID + ", problem='" + this.problem  + ", drugName='" + this.drugName + ", diagnose='" + this.diagnose + '\'' + '}';
  }
}