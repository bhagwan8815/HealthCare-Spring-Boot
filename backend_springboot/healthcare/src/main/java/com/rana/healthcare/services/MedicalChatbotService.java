package com.rana.healthcare.services;

import com.rana.healthcare.models.ChatbotHistory;
import com.rana.healthcare.models.User;
import com.rana.healthcare.repository.ChatbotHistoryRepository;
import com.rana.healthcare.repository.UserRepository;
import com.rana.healthcare.request.ChatbotRequest;
import com.rana.healthcare.response.ChatbotResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MedicalChatbotService {

    private final RestClient restClient;

    @Autowired
    public MedicalChatbotService(RestClient restClient){
        this.restClient = restClient;
    }

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ChatbotHistoryRepository chatbotHistoryRepository;
    @Value(("${openai.api.key}"))
    private String apiKey;
    @Value("${openai.api.model}")
    private String model;



   public String getChatResponse(String prompt , String email){

       String modifiedPrompt = """  
      You are a professional medical assistant. 
    Answer only questions related to health, medicine, wellness, diseases, symptoms, treatments, medical advice and Simple Hey hello or diet plan. 
    Do not answer questions unrelated to healthcare. 
    If a question is not related to health, medicine, or wellness, politely reply: 
    "I am a medical assistant. I can only provide help with medical-related questions."

    User question: %s
    """.formatted(prompt);

        ChatbotRequest chatbotRequest = new ChatbotRequest(
                model,
                List.of(new ChatbotRequest.Message("user" , modifiedPrompt))
        );

        ChatbotResponse response = restClient.post()
                .header("Authorization" , "Bearer " + apiKey)
                .header("Content-Type" , "application/json")
                .body(chatbotRequest)
                .retrieve()
                .body(ChatbotResponse.class);


       ChatbotHistory chatbotHistory = new ChatbotHistory();
       chatbotHistory.setUserQuery(prompt);
       chatbotHistory.setBotResponse(String.valueOf(response));
       chatbotHistory.setTimestamp(LocalDateTime.now());

//       Optional<User> user = userRepository.findByEmail(email);


       User existingUser = userRepository.findByEmail(email)
               .orElseThrow(() -> new RuntimeException("User not registered with this email: " + email));

       chatbotHistory.setUser(existingUser);

       chatbotHistoryRepository.save(chatbotHistory);


        return response.choices().get(0).message().content();


    }







}
