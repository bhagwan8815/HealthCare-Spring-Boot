package com.rana.healthcare.models;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "chatbothistory")
public class ChatbotHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String userQuery;
    @Column(columnDefinition = "TEXT")
    private String botResponse;
    private LocalDateTime timestamp;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Long getId() {
        return id;
    }

    public String getUserQuery() {
        return userQuery;
    }

    public String getBotResponse() {
        return botResponse;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUserQuery(String userQuery) {
        this.userQuery = userQuery;
    }

    public void setBotResponse(String botResponse) {
        this.botResponse = botResponse;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
// Getters and Setters
}

