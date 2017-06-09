package com.learn.learn001.config;

import com.learn.learn001.entity.UserInfo;
import com.learn.learn001.repository.UserinfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

/**
 * Created by liujunbin on 17/6/8.
 */
@Component
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserinfoRepository userinfoRepository;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        UserInfo userInfo = userinfoRepository.findByUserName(s);

        return new User(userInfo.getUserName() , userInfo.getPassword() , AuthorityUtils.createAuthorityList(userInfo.getRoles()));



    }
}
