package com.learn.learn001.service;

import com.learn.learn001.entity.UserInfo;
import com.learn.learn001.repository.UserinfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

/**
 * Created by liujunbin on 17/6/8.
 */
public class CustomUserService implements UserDetailsService {

    @Autowired
    UserinfoRepository userinfoRepository;


    @Override
    @Transactional
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        UserInfo userInfo = userinfoRepository.findByUserName(s);

        Set<GrantedAuthority> grantedAuthorities = new HashSet<>();

//        for(Role role : userInfo.getAge())



        return null;

    }
}
