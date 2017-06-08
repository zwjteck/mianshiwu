package com.learn.learn001.controller;

import com.learn.learn001.entity.UserInfo;
import com.learn.learn001.repository.UserinfoRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by liujunbin on 17/6/7.
 */

@RestController
public class UserInfoController {


    private static final Logger logger = LoggerFactory.getLogger(UserInfoController.class);

    @Autowired
    private UserinfoRepository userinfoRepository;

    @PostMapping(value = "/user")
    void createUser(@RequestBody Object body){
        logger.info("+++++++++++++++++++++++++++++++");
        logger.info(body.toString());
        logger.info("+++++++++++++++++++++++++++++++");
    }

}
