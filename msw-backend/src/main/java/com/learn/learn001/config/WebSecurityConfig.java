package com.learn.learn001.config;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * Created by liujunbin on 17/6/7.
 */

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {


    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    private static final Logger loger = LoggerFactory.getLogger(WebSecurityConfig.class);

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        loger.debug("++++++++++++++++++++++++++++++++++++++");
        loger.info(auth.toString());

        auth.inMemoryAuthentication()
                .withUser("admin").password("1234567").roles("USER");


//        auth.userDetailsService(customUserDetailsService);

    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.authorizeRequests().antMatchers("/girls" , "/user").permitAll().anyRequest().authenticated().and().formLogin().loginPage("/login").permitAll()
                .and().logout()
                .permitAll();
    }


}
