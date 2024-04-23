package fsa.training.ims_team01.resource;

import fsa.training.ims_team01.model.dto.candidateDto.CandidateListDto;
import fsa.training.ims_team01.model.dto.userDto.UserCreate;
import fsa.training.ims_team01.model.dto.userDto.UserListDto;
import fsa.training.ims_team01.model.entity.User;
import fsa.training.ims_team01.service.UserService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserResource {
    private final UserService userService;

    public UserResource(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public Page<UserListDto> getCandidates(@PageableDefault Pageable pageable) {
        return userService.getListUser(pageable);
    }


    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody @Valid UserCreate userCreate) {
        User user = User.builder()
                .username(userCreate.getUsername())
                .fullName(userCreate.getFullName())
                .dob(userCreate.getDob())
                .email(userCreate.getEmail())
                .address(userCreate.getAddress())
                .phone(userCreate.getPhone())
                .password(userCreate.getPassword())
                .note(userCreate.getNote())
                .gender(userCreate.getGender())
                .role(userCreate.getRole())
                .department(userCreate.getDepartment())
                .build();
        User userBody = userService.create(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(userBody);
    }
}
