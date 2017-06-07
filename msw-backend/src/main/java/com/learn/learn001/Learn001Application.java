package com.learn.learn001;

import jdk.nashorn.internal.ir.annotations.Immutable;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;


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
