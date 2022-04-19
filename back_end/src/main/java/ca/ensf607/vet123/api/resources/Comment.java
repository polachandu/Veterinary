package ca.ensf607.vet123.api.resources;

public class Comment {
    private int commentId;
    private String comment;    
    private String date;    
    private String userRole;    
    private String username;    
    private Boolean studentCommentFlag;

    public Comment() {
    }

    public Comment(int commentId, String comment, String date, String userRole, String username, Boolean studentCommentFlag) {
        this.commentId = commentId;
        this.comment = comment;
        this.date = date;
        this.userRole = userRole;
        this.username = username;
        this.studentCommentFlag = studentCommentFlag;
    }

    public int getCommentId() {
        return this.commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getComment() {
        return this.comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
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

    public Boolean isStudentCommentFlag() {
        return this.studentCommentFlag;
    }

    public Boolean getStudentCommentFlag() {
        return this.studentCommentFlag;
    }

    public void setStudentCommentFlag(Boolean studentCommentFlag) {
        this.studentCommentFlag = studentCommentFlag;
    }

    public Comment commentId(int commentId) {
        setCommentId(commentId);
        return this;
    }

    public Comment comment(String comment) {
        setComment(comment);
        return this;
    }

    public Comment date(String date) {
        setDate(date);
        return this;
    }

    public Comment userRole(String userRole) {
        setUserRole(userRole);
        return this;
    }

    public Comment username(String username) {
        setUsername(username);
        return this;
    }

    public Comment studentCommentFlag(Boolean studentCommentFlag) {
        setStudentCommentFlag(studentCommentFlag);
        return this;
    }
}