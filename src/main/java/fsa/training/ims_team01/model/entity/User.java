package fsa.training.ims_team01.model.entity;

import fsa.training.ims_team01.enums.commonEnum.DepartmentEnum;
import fsa.training.ims_team01.enums.userEnum.GenderUserEnum;
import fsa.training.ims_team01.enums.userEnum.UserRoleEnum;
import fsa.training.ims_team01.enums.userEnum.UserStatusEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "user")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "full_name" ,  nullable = false)
    private String fullName;

    @Column(name = "dob", nullable = false)
    private LocalDate dob;

    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "phone")
    private String phone;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "note")
    private String note;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private GenderUserEnum gender;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_role")
    private UserRoleEnum role;

//    department
    @Enumerated(EnumType.STRING)
    @Column(name = "department")
    private DepartmentEnum department;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_status", columnDefinition = "ENUM('ACTIVE', 'INACTIVE') DEFAULT 'ACTIVE'")
    private UserStatusEnum status;


}
