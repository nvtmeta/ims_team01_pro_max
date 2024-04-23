package fsa.training.ims_team01.model.dto.candidateDto;

import fsa.training.ims_team01.enums.candidateEnum.CandidateStatusEnum;
import fsa.training.ims_team01.enums.commonEnum.GenderEnum;
import fsa.training.ims_team01.enums.commonEnum.HighestLevelEnum;
import fsa.training.ims_team01.enums.commonEnum.PositionEnum;
import fsa.training.ims_team01.enums.commonEnum.SkillEnum;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CandidateCreateDto {

    @NotNull(message = "{ME002.message}")
    private String fullName;

    @Email(message = "{ME009.message}")
    @NotNull(message = "{ME002.message}")
    private String email;

    @NotNull(message = "{ME002.message}")
    private Integer phone;

    @NotNull(message = "{ME002.message}")
    private GenderEnum gender;

    @NotNull(message = "{ME002.message}")
    private String address;

    @NotNull(message = "{ME002.message}")
    private LocalDate dob;

    private String note;

    private CandidateStatusEnum status = CandidateStatusEnum.OPEN;

    @NotNull(message = "{ME002.message}")
    private HighestLevelEnum highestLevel;


    @NotNull(message = "{ME002.message}")
    private PositionEnum position;

    @NotNull(message = "{ME002.message}")
    private Set<SkillEnum> skills;

    private Integer yoe;

    //    @NotNull(message = "{ME002.message}")
    private byte[] cvAttachment;

    @NotNull(message = "{ME002.message}")
    private Long recruiterId;

    private Boolean deleted = false;
}
