package io.nology.todo.config;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class WebConfig implements WebMvcConfigurer {
  public void addCorsMappings(CorsRegistry registry) {
    String[] allowedOrigins = { "http://localhost:5173", "http://127.0.0.1:5173" };
    registry.addMapping("/**")
        .allowedOrigins(allowedOrigins)
        .allowedMethods("*")
        .allowedHeaders("*")
        .allowCredentials(true);
  }
}
