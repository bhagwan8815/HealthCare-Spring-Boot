package com.rana.healthcare.controller;

import com.rana.healthcare.request.PromptRequest;
import com.rana.healthcare.request.PromptRequests;
import com.rana.healthcare.services.MedicalChatbotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/chat")
@PreAuthorize("isAuthenticated()")
public class MedicalChatbotController {

    private final MedicalChatbotService  medicalChatbotService;

    @Autowired
    public MedicalChatbotController(MedicalChatbotService medicalChatbotService){
        this.medicalChatbotService = medicalChatbotService;
    }

//    @PostMapping
//    public String chat(@RequestBody PromptRequest promptRequest){
//        System.out.println("the prompt request is " + promptRequest);
//        String prompt = """
//      You are a professional medical assistant.
//    Answer only questions related to health, medicine, wellness, diseases, symptoms, treatments, medical advice and Simple Hey hello or diet plan.
//    Do not answer questions unrelated to healthcare.
//    If a question is not related to health, medicine, or wellness, politely reply:
//    "I am a medical assistant. I can only provide help with medical-related questions."
//
//    User question: %s
//    """.formatted(promptRequest);
//        return medicalChatbotService.getChatResponse(prompt);
//    }


    @PostMapping
    public String chat(@RequestBody PromptRequests promptRequests){
//        System.out.println("the email from the prompt is  " + promptRequests.getEmail());
//        String prompt = """
//      You are a professional medical assistant.
//    Answer only questions related to health, medicine, wellness, diseases, symptoms, treatments, medical advice and Simple Hey hello or diet plan.
//    Do not answer questions unrelated to healthcare.
//    If a question is not related to health, medicine, or wellness, politely reply:
//    "I am a medical assistant. I can only provide help with medical-related questions."
//
//    User question: %s
//    """.formatted(promptRequests);
        return medicalChatbotService.getChatResponse(promptRequests.getPrompt() , promptRequests.getEmail());
    }


}
