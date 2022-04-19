package ca.ensf607.vet123.api.jdbcControllers;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
/**
 * Singleton Connector class to retrieve one connection to the animalsDB database
 * Uses "testUser" as username 
 * and "test" as password
 */
public final class Connector {
    private static Connector instance;
    private Connection conn;
    /**
     * Private constructor of connector.
     * sets connection to null;
     */
    private Connector() {
        this.conn = null;
    }

    /**
     * Method to retrive instance of single Connector object
     * @return Connector
     */
    public static Connector getInstance() {
        if (instance == null) {
            instance = new Connector();
        }
        return instance;
    }

    /**
     * Method to retrive Connection to animalsDB
     * @return Connection
     */
    public Connection getConnection(){
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");   
            this.conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/animalsDB","testUser","test");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (ClassNotFoundException e2) {
            e2.printStackTrace();
        }
        return this.conn;
    }
}