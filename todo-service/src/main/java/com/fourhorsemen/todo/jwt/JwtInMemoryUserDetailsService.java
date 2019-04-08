package com.fourhorsemen.todo.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {
    inMemoryUserList.add(new JwtUserDetails(1L, "Sankalp",
            "$2a$10$uJG3jqahooua2hImcXc6F.7yAEFGOFN8Wvzxfpn4BvkYEtNFrAMxq", "ROLE_USER_2"));
    inMemoryUserList.add(new JwtUserDetails(2L, "Ashutosh",
            "$2a$10$hQZTqYvO0IlmJvtTID5aQO9Z0XpIGDxuTsDayknWRXcYTd7eysnW6", "ROLE_USER_2"));
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


