package fsa.training.ims_team01.service;

import fsa.training.ims_team01.model.dto.userDto.UserListDto;
import fsa.training.ims_team01.model.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserService {

    Page<UserListDto> getListUser(Pageable pageable);
    User create (User user);
}
