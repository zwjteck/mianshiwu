package com.learn.learn001.girl;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by liujunbin on 17/5/23.
 */

@Entity
public class Girl {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String cupsize;

    private Integer age;

    public Girl(){

    }

    public Integer getId() {
        return id;
    }

    public String getCupsize() {
        return cupsize;
    }

    public Integer getAge() {
        return age;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setCupsize(String cupsize) {
        this.cupsize = cupsize;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}
