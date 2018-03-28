package de.webapp.spring.one.users;


import org.springframework.context.annotation.Bean;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

public interface UserRepository extends PagingAndSortingRepository<User, String> {
  // fields having getter and setter are exposed automagically
}
