package de.webapp.spring.one;


import de.webapp.spring.one.users.UserTestDataLoader;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {

	@Bean(initMethod = "loadData")
	UserTestDataLoader RepositoryTestData() {
		return new UserTestDataLoader();
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
