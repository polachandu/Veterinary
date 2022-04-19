package ca.ensf607.vet123.api.jdbcControllers;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import ca.ensf607.vet123.api.resources.Animal;
import ca.ensf607.vet123.api.resources.User;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

    
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MainController {
    Connector connector = Connector.getInstance();
    
    /**
     * API to check if login and password info is correct
     * @param username
     * @param userPassword
     * @return true if combinatio is correct 
     */
    @GetMapping("/login/{username}/{userPassword}")
    Boolean login(@PathVariable String username,@PathVariable String userPassword){
        Connection conn =connector.getConnection();
        String sql = String.format("SELECT * FROM USERS WHERE (Username='%s' AND UserPassword='%s')",username,userPassword);
        try{
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            if(rs.next()){
                conn.close();
                return true;
            }
        }catch (SQLException e){
            e.printStackTrace();
        }
        System.out.println("Incorrect password or username");
        return false;
    }
    /**
     * API to get list of animals and profile images for main page
     * @return ArrayList<Animal>
     */
    @GetMapping("/animals")
    ArrayList<Animal> getAnimals(){
        ArrayList<Animal> listOfAnimals = new ArrayList<Animal>();
        String query= "SELECT ANIMAL.AnimalID, AnimalName, Species, Weight, Tatto_Num, CityTatoo, Breed, RFID, SubSpecies, Sex, AnimalAvailability, FileURL FROM ANIMAL LEFT JOIN (SELECT * FROM IMAGES WHERE ImageType='profile' ) AS IMG ON ANIMAL.AnimalID=IMG.AnimalID";

        Connection conn = connector.getConnection();
        try{
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            //PUT POST DELETE INSERT
            while(rs.next()){
                int animalId = rs.getInt("AnimalID");
                String animalName= rs.getString("AnimalName");
                String species= rs.getString("Species");
                String weight= rs.getString("Weight");
                String tattooNum= rs.getString("Tatto_Num");
                String cityTattoo= rs.getString("CityTatoo");
                String sex= rs.getString("Sex");
                String availability= rs.getString("AnimalAvailability");
                String fileURL= rs.getString("FileURL");
                String breed= rs.getString("Breed");
                String RFID= rs.getString("RFID");
                String subSpecies= rs.getString("SubSpecies");
                listOfAnimals.add(new Animal(animalId,animalName,species,weight,tattooNum,cityTattoo,sex,availability,fileURL,breed,RFID,subSpecies));
            }
            conn.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return listOfAnimals;
    }
    /**
     * API to get specific animal information
     * @param id animal ID
     * @return Animal 
     */
    @GetMapping("/animals/{id}")
    Animal getAnimalByID(@PathVariable int id){
        Animal oneAnimal =null;
        Connection conn = connector.getConnection();
        String query =String.format("SELECT ANIMAL.AnimalID, AnimalName, Species, Weight, Tatto_Num, CityTatoo, Breed, RFID, SubSpecies, Sex, AnimalAvailability, FileURL FROM ANIMAL LEFT JOIN (SELECT * FROM IMAGES WHERE ImageType='profile' ) AS IMG ON ANIMAL.AnimalID=IMG.AnimalID WHERE ANIMAL.AnimalID=%d",id);

        try{
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            if(rs.next()){
                int animalId = rs.getInt("AnimalID");
                String animalName= rs.getString("AnimalName");
                String species= rs.getString("Species");
                String weight= rs.getString("Weight");
                String tattooNum= rs.getString("Tatto_Num");
                String cityTattoo= rs.getString("CityTatoo");
                String sex= rs.getString("Sex");
                String availability= rs.getString("AnimalAvailability");
                String fileURL= rs.getString("FileURL");
                String breed= rs.getString("Breed");
                String RFID= rs.getString("RFID");
                String subSpecies= rs.getString("SubSpecies");
                oneAnimal = new Animal(animalId,animalName,species,weight,tattooNum,cityTattoo,sex,availability,fileURL,breed,RFID,subSpecies);
            }
            conn.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return oneAnimal;
    }
    
	@GetMapping("/users")
    ArrayList<User> getAllUsers(){
        ArrayList<User> listOfUsers = new ArrayList<User>();

        Connection conn = connector.getConnection();
        String query= "SELECT * FROM USERS";
        try{
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while(rs.next()){
                int userId = rs.getInt("UserID");
                String userName= rs.getString("Username");
                String userRole= rs.getString("UserRole");
                String userEmail= rs.getString("Email");
                String actDay= rs.getString("ActivationDay");
                String actMonth= rs.getString("ActivationMonth");
                String actYear= rs.getString("ActivationYear");
                String date = actDay + "-" + actMonth + "-" + actYear;
                listOfUsers.add(new User(userId,userName,userRole,userEmail,date));
            }
            conn.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return listOfUsers;
    }

	/**
     * test API to insert userID and username into DB;
     * have to use getMapping, using POST is still being blocked by CORS
     * @param userID
     * @param username
     */
    @GetMapping("/users/{userID}/{username}")
    void addUser(@PathVariable int userID, @PathVariable String username ){
        Connection conn = connector.getConnection();
        String sql = String.format("INSERT INTO USERS (UserID, Username) VALUES (%d, '%s')", userID, username); 

        try {
            Statement stmt = conn.createStatement();
            int rs = stmt.executeUpdate(sql);
            conn.close();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

}

