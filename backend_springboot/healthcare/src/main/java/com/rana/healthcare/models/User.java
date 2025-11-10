package com.rana.healthcare.models;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<ChatbotHistory> chatbotHistories;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<HealthReport> healthReports;
//
//    private String role = "USER";

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

//    public String getRole() {
//        return role;
//    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }


//    public void setRole(String role){
//        this.role = role;
//    }
}
