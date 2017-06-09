package com.learn.learn001.girl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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


    private static final Logger loger = LoggerFactory.getLogger(GirlController.class);

    @GetMapping("/girls")
    public List<Girl> getAllGirls(@RequestHeader(value = "Accept-Language") String tes){

        loger.info("==========================");
        loger.info(tes);
        return girlRepository.findAll();

    }

    @GetMapping("/login")
    public String getHello(){

        return "login";

    }

    @GetMapping("/test")
    public String test(){

        return "test";

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
