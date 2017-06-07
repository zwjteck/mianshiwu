package com.learn.learn001.girl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by liujunbin on 17/5/23.
 */

@RestController
public class GirlController {

    @Autowired
    private GirlRepository girlRepository;

    @GetMapping("/girls")
    public List<Girl> getAllGirls(){

        return girlRepository.findAll();

    }

    @PostMapping("/girl")
    @Transactional
    public Girl addGirl(@RequestBody Girl girl2 , HttpSession session){


        Girl girl = new Girl();
        girl.setAge(11);
        girl.setCupsize("C");
        return girlRepository.save(girl);

    }
}
