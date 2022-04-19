package ca.ensf607.vet123.api.ormControllers;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "USERS")
public class User{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "UserID")
	private int userId;

	@Column(name = "Username")
	private String userName;
	
	@Column(name = "UserRole")
	private String userRole;
	
	@Column(name = "Email")
	private String userEmail;
	
	public User() {
		
	}
	
	public User(int userId, String userName, String userRole, String userEmail) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userRole = userRole;
		this.userEmail = userEmail;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}
	public String getUserRole() {
		return userRole;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
}