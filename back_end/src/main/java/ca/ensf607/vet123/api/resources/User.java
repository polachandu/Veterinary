package ca.ensf607.vet123.api.resources;

public class User {	

	private int userId;
	private String userName;
	private String userRole;
	private String userEmail;
	private String date;
	




    public User(int userId, String userName, String userRole, String userEmail, String date) {
        this.userId = userId;
        this.userName = userName;
        this.userRole = userRole;
        this.userEmail = userEmail;
        this.date = date;
    }

    public int getUserId() {
        return this.userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return this.userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserRole() {
        return this.userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public String getUserEmail() {
        return this.userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public User userId(int userId) {
        setUserId(userId);
        return this;
    }

    public User userName(String userName) {
        setUserName(userName);
        return this;
    }

    public User userRole(String userRole) {
        setUserRole(userRole);
        return this;
    }

    public User userEmail(String userEmail) {
        setUserEmail(userEmail);
        return this;
    }

    public User date(String date) {
        setDate(date);
        return this;
    }


}