package com.rana.healthcare.request;

import lombok.Data;

@Data
public class PromptRequests {
private String Prompt;
private String email;

    public String getPrompt() {
        return Prompt;
    }

    public String getEmail() {
        return email;
    }

    public void setPrompt(String prompt) {
        Prompt = prompt;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
