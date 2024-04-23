package fsa.training.ims_team01.service.impl;

import fsa.training.ims_team01.model.dto.userDto.UserListDto;
import fsa.training.ims_team01.model.entity.User;
import fsa.training.ims_team01.repository.UserRepository;
import fsa.training.ims_team01.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Page<UserListDto> getListUser(Pageable pageable) {
        return userRepository.getListUser(pageable);
    }

    @Override
    public User create(User user) {
        return userRepository.save(user);
    }
}
