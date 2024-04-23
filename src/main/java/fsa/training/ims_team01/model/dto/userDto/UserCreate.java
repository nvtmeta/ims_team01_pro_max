package fsa.training.ims_team01.model.dto.userDto;

import fsa.training.ims_team01.enums.commonEnum.DepartmentEnum;
import fsa.training.ims_team01.enums.userEnum.GenderUserEnum;
import fsa.training.ims_team01.enums.userEnum.UserRoleEnum;
import fsa.training.ims_team01.enums.userEnum.UserStatusEnum;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserCreate {

    @NotNull(message = "{ME028.message}")
    private String username;

    @NotNull(message = "{ME028.message}")
    private String fullName;

    @NotNull(message = "{ME028.message}")
    private LocalDate dob;

    @Email
    @NotNull(message = "{ME028.message}")
    private String email;

    @NotNull(message = "{ME028.message}")
    private String address;

    @NotNull(message = "{ME028.message}")
    private String phone;

    @NotNull(message = "{ME028.message}")
    private String password;

    private String note;

    @NotNull(message = "{ME028.message}")
    private GenderUserEnum gender;

    @NotNull(message = "{ME028.message}")
    private UserRoleEnum role;

    @NotNull(message = "{ME028.message}")
    private DepartmentEnum department;

    private UserStatusEnum status = UserStatusEnum.ACTIVE;
}
