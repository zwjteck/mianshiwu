package com.learn.learn001.repository;

import com.learn.learn001.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by liujunbin on 17/6/7.
 */
public interface UserinfoRepository extends JpaRepository<UserInfo , String> {

    public UserInfo findByUsername(String name);
}
