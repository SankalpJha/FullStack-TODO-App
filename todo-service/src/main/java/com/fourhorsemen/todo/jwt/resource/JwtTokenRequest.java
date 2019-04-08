package com.fourhorsemen.todo.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {
  
  private static final long serialVersionUID = -5616176897013108345L;

  private String username;
    private String password;
    
    
//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJTYW5rYWxwIiwiZXhwIjoxNTU1MzIxNDcxLCJpYXQiOjE1NTQ3MTY2NzF9.b10DA77kjb56jIqI7oynqVotdQ3L-mqEiu3XvhNu07ysRNEkuAEcKMVlzQ1zhnEiUFPNguYq_kzDlbnzLTJRPA"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String userName, String password) {
        this.setUsername(userName);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String userName) {
        this.username = userName;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

