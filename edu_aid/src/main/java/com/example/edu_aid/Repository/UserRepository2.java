package com.example.edu_aid.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.edu_aid.Model.UserModel;

public interface UserRepository2 extends JpaRepository<UserModel, Long> {
    Optional<UserModel> findByEmail(String email);
}
