package fsa.training.ims_team01.model.dto.candidateDto;

import fsa.training.ims_team01.enums.candidateEnum.CandidateStatusEnum;
import fsa.training.ims_team01.enums.commonEnum.HighestLevelEnum;
import fsa.training.ims_team01.enums.commonEnum.PositionEnum;
import fsa.training.ims_team01.enums.commonEnum.SkillEnum;
import fsa.training.ims_team01.model.dto.userDto.RecruiterDto;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class CandidateListDto {
    private Long id;
    private String fullName;
    private String email;
    private Integer phone;
    private CandidateStatusEnum status;
    private HighestLevelEnum highestLevel;
    private PositionEnum position;
    private String recruiterName;


    public CandidateListDto(Long id, String fullName, String email, Integer phone, CandidateStatusEnum status, HighestLevelEnum highestLevel,
                            PositionEnum position, String recruiterName) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.status = status;
        this.highestLevel = highestLevel;
        this.position = position;
        this.recruiterName = recruiterName;
    }



}
