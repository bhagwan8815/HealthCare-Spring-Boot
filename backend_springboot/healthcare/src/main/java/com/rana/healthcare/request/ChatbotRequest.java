package com.rana.healthcare.request;

import java.util.List;

public record ChatbotRequest (String model , List<Message> messages) {

    public static record Message(String role, String content) {

    }
}
