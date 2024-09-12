package com.spring.render.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.render.models.MessageModel;

@Repository
public interface MessageRepository extends JpaRepository<MessageModel, UUID> {

}
