package ca.ensf607.vet123.api.resources;

public class Image {
    private int imageId;
    private String fileURL;
    private String date;
    private String userRole;
    private String username;

    public Image() {
    }

    public Image(int imageId, String fileURL, String date, String userRole, String username) {
        this.imageId = imageId;
        this.fileURL = fileURL;
        this.date = date;
        this.userRole = userRole;
        this.username = username;
    }

    public int getImageId() {
        return this.imageId;
    }

    public void setImageId(int imageId) {
        this.imageId = imageId;
    }

    public String getFileURL() {
        return this.fileURL;
    }

    public void setFileURL(String fileURL) {
        this.fileURL = fileURL;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getUserRole() {
        return this.userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Image imageId(int imageId) {
        setImageId(imageId);
        return this;
    }

    public Image fileURL(String fileURL) {
        setFileURL(fileURL);
        return this;
    }

    public Image date(String date) {
        setDate(date);
        return this;
    }

    public Image userRole(String userRole) {
        setUserRole(userRole);
        return this;
    }

    public Image username(String username) {
        setUsername(username);
        return this;
    }
}
