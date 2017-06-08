package com.learn.learn001;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;



@EntityScan
@SpringBootApplication
public class Learn001Application extends SpringBootServletInitializer {
	public static void main(String[] args) {
		SpringApplication.run(Learn001Application.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(Learn001Application.class);

	}
}
