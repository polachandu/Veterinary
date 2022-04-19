package ca.ensf607.vet123.api.jdbcControllers;
import java.util.ArrayList;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import ca.ensf607.vet123.api.resources.Comment;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CommentController {
    //get connection
    Connector connector = Connector.getInstance();

    /**
     * API to get all comments about specific animal
     * @param id id of an animal
     * @return arraylist of comments about animal
     */
    @GetMapping("/animals/comments/{id}")
    ArrayList<Comment> getCommnets(@PathVariable int id){
        ArrayList<Comment> listOfComments= new ArrayList<Comment>();
        
        // Connection conn = connect();
        Connection conn = connector.getConnection();
        String query =String.format("SELECT CommentID, ComDescription, ComDay,ComMonth, ComYear,Username,UserRole,StudentCommentFlag FROM COMMENTS LEFT JOIN USERS ON COMMENTS.UserID=USERS.UserID WHERE AnimalID=%d",id);

        try{
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while(rs.next()){
                int commentId= rs.getInt("CommentID");
                String comment= rs.getString("ComDescription");
                String username= rs.getString("Username");
                String userRole= rs.getString("UserRole");
                Boolean studentFlag = rs.getBoolean("StudentCommentFlag");
                String day = rs.getString("ComDay");
                String month= rs.getString("ComMonth");
                String year= rs.getString("ComYear");
                String date=day+"-"+month+"-"+year;
                listOfComments.add(new Comment(commentId, comment, date, userRole, username,studentFlag));
            }
            conn.close();
        }catch (SQLException e){
            e.printStackTrace();
        }
        return listOfComments;
    }
}
