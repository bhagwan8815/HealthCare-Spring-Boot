package com.rana.healthcare.services;

import com.rana.healthcare.models.User;
import com.rana.healthcare.repository.UserRepository;
import com.rana.healthcare.config.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String login(String email, String password) {
        // Check if user exists before authentication
        User existingUser = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not registered with this email: " + email));

        // Authenticate user credentials
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
            );
        } catch (BadCredentialsException e) {
            throw new RuntimeException("Invalid password. Please check and try again.");
        }

        // Load user details
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(email);
        // Generate JWT

//        return jwtProvider.generateToken(String.valueOf(userDetails));
        return jwtProvider.generateToken(userDetails.getUsername());

    }

    public String register(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new RuntimeException("User already exists with email: " + user.getEmail());
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return "User registered successfully!";
    }
}

