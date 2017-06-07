package com.learn.learn001.repository;


import com.learn.learn001.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserinfoRepository extends JpaRepository<UserInfo , Integer> {

    public UserInfo findByUserName(String userName);
}