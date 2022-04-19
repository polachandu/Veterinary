package ca.ensf607.vet123.api.ormControllers;



import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity

class AnimalAlert {

  private @Id @GeneratedValue Long id;
  private int animalId;
  private int userID;
  private String reminder;
  private String alert;
  private String date;
  private String name;
  private String role;
 

  AnimalAlert() {}

  AnimalAlert(int animalIdd, int userID, String reminder, String alert, String date, String name, String role) {

  
	  this.animalId = animalId;

	  this.userID = userID;
       
	  this.reminder=reminder;
    
	  this.alert=alert;
	  
	  this.date=date;
	  
	  this.name=name;
	  
	  this.role=role;
  
  }

  





public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public int getAnimalId() {
	return animalId;
}

public void setAnimalId(int animalId) {
	this.animalId = animalId;
}

public int getUserID() {
	return userID;
}

public void setUserID(int userID) {
	this.userID = userID;
}

public String getReminder() {
	return reminder;
}

public void setReminder(String reminder) {
	this.reminder = reminder;
}

public String getAlert() {
	return alert;
}

public void setAlert(String alert) {
	this.alert = alert;
}

public String getDate() {
	return date;
}

public void setDate(String date) {
	this.date = date;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getRole() {
	return role;
}

public void setRole(String role) {
	this.role = role;
}

@Override
  public boolean equals(Object o) {

    if (this == o)
      return true;
    if (!(o instanceof AnimalAlert))
      return false;
    AnimalAlert review = (AnimalAlert) o;
    return Objects.equals(this.animalId, review.animalId) && Objects.equals(this.userID, review.userID)
        && Objects.equals(this.date, review.date) && Objects.equals(this.reminder, review.reminder)
        && Objects.equals(this.role, review.role) && Objects.equals(this.name, review.name)  && Objects.equals(this.alert, review.alert) && Objects.equals(this.userID, review.userID );
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.animalId, this.userID, this.date, this.reminder, this.role, this.name, this.alert, this.userID);
  }

  @Override
  public String toString() {
    return "AnimalRequest{" + "id=" + this.id + ", name='" + this.name + ", alert='" + this.alert + ", animalID='" +this.animalId+'\'' + ", userID='" + this.userID + ", reminder='" + this.reminder  + ", date='" + this.date + ", role='" + this.role + '\'' + '}';
  }
}