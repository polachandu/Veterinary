

package ca.ensf607.vet123.api.ormControllers;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity

class AnimalRec {

  private @Id @GeneratedValue Long id;
  private int animalId;
  private int weight;
  private String species;
  private String animalAvailability;
  private String sex;
  private String cityTatoo;
  private String breed;
  private int userID;

  AnimalRec() {}

  AnimalRec(int animalIdd, int weight, String cityTatoo, String species, String animalAvailability, String sex, String breed, int userId) {

  
	  this.animalId = animalIdd;

	  this.weight = weight;
       
	  this.animalAvailability=animalAvailability;
    
	  this.sex=sex;
	  
	  this.cityTatoo=cityTatoo;
	  
	  this.breed=breed;
	  
	  this.userID=userId;
  
  }

  

public String getBreed() {
	return breed;
}

public void setBreed(String breed) {
	this.breed = breed;
}


public String getSex() {
	return sex;
}

public void setSex(String sex) {
	this.sex = sex;
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}


public String getAnimalAvailability() {
	return animalAvailability;
}

public void setAnimalAvailability(String animalAvailability) {
	this.animalAvailability = animalAvailability;
}

public String getCityTatoo() {
	return cityTatoo;
}

public void setCityTatoo(String cityTatoo) {
	this.cityTatoo = cityTatoo;
}

public int getWeight() {
	return weight;
}

public void setWeight(int weight) {
	this.weight = weight;
}

public String getSpecies() {
	return species;
}

public void setSpecies(String species) {
	this.species = species;
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



@Override
  public boolean equals(Object o) {

    if (this == o)
      return true;
    if (!(o instanceof AnimalRec))
      return false;
    AnimalRec review = (AnimalRec) o;
    return Objects.equals(this.animalId, review.animalId) && Objects.equals(this.weight, review.weight)
        && Objects.equals(this.species, review.species) && Objects.equals(this.animalAvailability, review.animalAvailability)
        && Objects.equals(this.sex, review.sex) && Objects.equals(this.cityTatoo, review.cityTatoo)  && Objects.equals(this.breed, review.breed) && Objects.equals(this.userID, review.userID );
  }

  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.animalId, this.weight, this.species, this.animalAvailability, this.sex, this.cityTatoo, this.breed, this.userID);
  }

  @Override
  public String toString() {
    return "AnimalRequest{" + "id=" + this.id + ", cityTatoo='" + this.cityTatoo + ", breed='" + this.breed + ", animalID='" +this.animalId+'\'' + ", weight='" + this.weight + ", animalAvailability='" + this.animalAvailability  + ", species='" + this.species + ", sex='" + this.sex + '\'' + '}';
  }
}