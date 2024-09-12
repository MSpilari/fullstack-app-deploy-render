package com.spring.render.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.spring.render.models.MessageModel;
import com.spring.render.repositories.MessageRepository;

@Service
public class MessageService {

    private MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    public List<MessageModel> allMessages() {
        return messageRepository.findAll();
    }

    public MessageModel createMessage(String message) {

        var newMessage = new MessageModel(message);

        return messageRepository.save(newMessage);
    }

}
