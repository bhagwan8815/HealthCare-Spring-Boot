package com.rana.healthcare.repository;

import com.rana.healthcare.models.ChatbotHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatbotHistoryRepository extends JpaRepository<ChatbotHistory , Long> {

}
