package com.coviddash.backend.config.cors;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry
            .addMapping("/**")
            .allowedMethods("GET")
            .allowedHeaders("*")
            .allowedOrigins("https://coviddash-api.herokuapp.com/");
//            .allowedOrigins("http://localhost:8080");

      }
    };
  }
}
