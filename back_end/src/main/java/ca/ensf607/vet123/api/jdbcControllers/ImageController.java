package ca.ensf607.vet123.api.jdbcControllers;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import ca.ensf607.vet123.api.resources.Image;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

    
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ImageController{
    //get connection
    Connector connector = Connector.getInstance();
    
    /**
     * GET api to retrive all images for specific animal
     * @param id animal id 
     * @return arrayList of images
     */
    @GetMapping("/animals/images/{id}")
    ArrayList<Image> getImages(@PathVariable int id){
        ArrayList<Image> listOfImages= new ArrayList<Image>();

        Connection conn = connector.getConnection();
        String query =String.format("SELECT ImageID, FileURL, Username, UserRole, CreationDay, CreationMonth, CreationYear FROM IMAGES LEFT JOIN USERS ON IMAGES.UserID=USERS.UserID WHERE AnimalID=%d",id);

        try{
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while(rs.next()){
                int imageId= rs.getInt("ImageID");
                String fileURL= rs.getString("FileURL");
                String username= rs.getString("Username");
                String userRole= rs.getString("UserRole");
                String day = rs.getString("CreationDay");
                String month= rs.getString("CreationMonth");
                String year= rs.getString("CreationYear");
                String date=day+"-"+month+"-"+year;
                listOfImages.add(new Image(imageId, fileURL, date, userRole, username));
            }
            conn.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return listOfImages;
    }
}
