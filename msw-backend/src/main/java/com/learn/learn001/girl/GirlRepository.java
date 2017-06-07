package com.learn.learn001.girl;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by liujunbin on 17/5/23.
 */


public interface GirlRepository extends JpaRepository<Girl , Integer> {

    public List<Girl> findByAge(Integer age);
}
