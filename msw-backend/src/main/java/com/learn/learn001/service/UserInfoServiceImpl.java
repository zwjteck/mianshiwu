package com.learn.learn001.service;

import com.learn.learn001.entity.UserInfo;
import com.learn.learn001.repository.UserinfoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by liujunbin on 17/6/7.
 */
@Service
public class UserInfoServiceImpl implements UserInfoService {



    private UserinfoRepository userinfoRepository;

    @Override
    public void save(UserInfo userinfo) {

        userinfoRepository.save(userinfo);

    }


    @Override
    @Transactional(readOnly = true)
    public UserInfo findByUserName(String userName) {
        return userinfoRepository.findByUserName(userName);
    }

}
