package com.learn.learn001.service;

import com.learn.learn001.entity.UserInfo;
import com.learn.learn001.repository.UserinfoRepository;

/**
 * Created by liujunbin on 17/6/7.
 */
public class UserInfoServiceImpl implements UserInfoService {


    private UserinfoRepository userinfoRepository;

    @Override
    public void save(UserInfo userinfo) {

    }


    @Override
    public UserInfo findByUserName(String userName) {
        return userinfoRepository.findByUserName(userName);
    }

}
