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
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Long id;


    /**
     * @auth liujunbin
     * @property {userName} 唯一

     **/
    @Column(unique = true)
    private String userName;


    private String password;


    private String roles;


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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
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


    public UserInfo(){}

    public UserInfo(String userName, String password, String roles, String sex, Integer age, String phone, String mail) {
        this.userName = userName;
        this.password = password;
        this.roles = roles;
        this.sex = sex;
        this.age = age;
        Phone = phone;
        this.mail = mail;
    }

    @Override
    public String toString() {
        return "UserInfo{" +
                "id='" + id + '\'' +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", roles='" + roles + '\'' +
                ", sex='" + sex + '\'' +
                ", age=" + age +
                ", Phone='" + Phone + '\'' +
                ", mail='" + mail + '\'' +
                '}';
    }
}
