package com.learn.learn001.service;

import com.learn.learn001.entity.UserInfo;

/**
 * Created by liujunbin on 17/6/7.
 */

public interface UserInfoService {

    /**
     * @auth liujunbin
     * @property {userinfo} 保存用户信息
     **/
    void save(UserInfo userinfo);

    /**
     * @auth liujunbin
     * @property {userName} 通过userName 查找用户
     **/
    UserInfo findByUserName(String userName );

}
