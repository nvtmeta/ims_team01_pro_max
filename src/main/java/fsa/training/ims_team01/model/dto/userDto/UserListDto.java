package fsa.training.ims_team01.model.dto.userDto;

import fsa.training.ims_team01.enums.commonEnum.DepartmentEnum;
import fsa.training.ims_team01.enums.userEnum.GenderUserEnum;
import fsa.training.ims_team01.enums.userEnum.UserRoleEnum;
import fsa.training.ims_team01.enums.userEnum.UserStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import java.time.LocalDate;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserListDto {
    private Long id;

    private String username;

    private String fullName;

    private LocalDate dob;

    private String email;

    private String address;

    private String phone;

    private String note;

    private GenderUserEnum gender;

    private UserRoleEnum role;

    private DepartmentEnum department;

}