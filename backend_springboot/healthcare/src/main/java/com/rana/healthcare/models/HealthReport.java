package com.rana.healthcare.models;


import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "health_report")
public class HealthReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String symptoms;
    @Column(columnDefinition = "TEXT")
    private String predictedDisease;
    @Column(columnDefinition = "TEXT")
    private String recommendedMedicine;
    @Column(columnDefinition = "TEXT")
    private String dietPlan;
    @Column(columnDefinition = "TEXT")
    private String workoutPlan;
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Getters and Setters
}
