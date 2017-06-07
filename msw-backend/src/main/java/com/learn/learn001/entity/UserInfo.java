package com.learn.learn001.entity;

import javax.persistence.*;

/**
 * Created by liujunbin on 17/6/7.
 */

@Entity
@Table(name = "user_info")
public class UserInfo {

    /**
     * @auth liujunbin
     **/
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private String id;


    @Column(unique = true)
    private String userName;


    private String sex;

    private Integer age;

    @Column(unique = true)
    private String Phone;

    private String mail;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getPhone() {
        return Phone;
    }

    public void setPhone(String phone) {
        Phone = phone;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

}
