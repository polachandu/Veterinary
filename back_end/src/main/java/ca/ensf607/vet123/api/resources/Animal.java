package ca.ensf607.vet123.api.resources;

public class Animal {
    private int animalId;
    private String animalName;
    private String animalSpecies;
    private String weight;
    private String tattooNum;
    private String cityTattoo;
    private String sex;
    private String animalAvailability;
    private String fileURL;
    private String breed;
    private String RFID;
    private String subSpecies;

    public Animal() {
    }

    public Animal(int animalId, String animalName, String animalSpecies, String weight, String tattooNum, String cityTattoo, String sex, String animalAvailability, String fileURL, String breed, String RFID, String subSpecies) {
        this.animalId = animalId;
        this.animalName = animalName;
        this.animalSpecies = animalSpecies;
        this.weight = weight;
        this.tattooNum = tattooNum;
        this.cityTattoo = cityTattoo;
        this.sex = sex;
        this.animalAvailability = animalAvailability;
        this.fileURL = fileURL;
        this.breed = breed;
        this.RFID = RFID;
        this.subSpecies = subSpecies;
    }

    public int getAnimalId() {
        return this.animalId;
    }

    public void setAnimalId(int animalId) {
        this.animalId = animalId;
    }

    public String getAnimalName() {
        return this.animalName;
    }

    public void setAnimalName(String animalName) {
        this.animalName = animalName;
    }

    public String getAnimalSpecies() {
        return this.animalSpecies;
    }

    public void setAnimalSpecies(String animalSpecies) {
        this.animalSpecies = animalSpecies;
    }

    public String getWeight() {
        return this.weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getTattooNum() {
        return this.tattooNum;
    }

    public void setTattooNum(String tattooNum) {
        this.tattooNum = tattooNum;
    }

    public String getCityTattoo() {
        return this.cityTattoo;
    }

    public void setCityTattoo(String cityTattoo) {
        this.cityTattoo = cityTattoo;
    }

    public String getSex() {
        return this.sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getAnimalAvailability() {
        return this.animalAvailability;
    }

    public void setAnimalAvailability(String animalAvailability) {
        this.animalAvailability = animalAvailability;
    }

    public String getFileURL() {
        return this.fileURL;
    }

    public void setFileURL(String fileURL) {
        this.fileURL = fileURL;
    }

    public String getBreed() {
        return this.breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getRFID() {
        return this.RFID;
    }

    public void setRFID(String RFID) {
        this.RFID = RFID;
    }

    public String getSubSpecies() {
        return this.subSpecies;
    }

    public void setSubSpecies(String subSpecies) {
        this.subSpecies = subSpecies;
    }

    public Animal animalId(int animalId) {
        setAnimalId(animalId);
        return this;
    }

    public Animal animalName(String animalName) {
        setAnimalName(animalName);
        return this;
    }

    public Animal animalSpecies(String animalSpecies) {
        setAnimalSpecies(animalSpecies);
        return this;
    }

    public Animal weight(String weight) {
        setWeight(weight);
        return this;
    }

    public Animal tattooNum(String tattooNum) {
        setTattooNum(tattooNum);
        return this;
    }

    public Animal cityTattoo(String cityTattoo) {
        setCityTattoo(cityTattoo);
        return this;
    }

    public Animal sex(String sex) {
        setSex(sex);
        return this;
    }

    public Animal animalAvailability(String animalAvailability) {
        setAnimalAvailability(animalAvailability);
        return this;
    }

    public Animal fileURL(String fileURL) {
        setFileURL(fileURL);
        return this;
    }

    public Animal breed(String breed) {
        setBreed(breed);
        return this;
    }

    public Animal RFID(String RFID) {
        setRFID(RFID);
        return this;
    }

    public Animal subSpecies(String subSpecies) {
        setSubSpecies(subSpecies);
        return this;
    }

}


