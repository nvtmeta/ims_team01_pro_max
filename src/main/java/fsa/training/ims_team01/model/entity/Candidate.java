package fsa.training.ims_team01.model.entity;

import fsa.training.ims_team01.enums.candidateEnum.CandidateStatusEnum;
import fsa.training.ims_team01.enums.commonEnum.GenderEnum;
import fsa.training.ims_team01.enums.commonEnum.HighestLevelEnum;
import fsa.training.ims_team01.enums.commonEnum.PositionEnum;
import fsa.training.ims_team01.enums.commonEnum.SkillEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "candidate")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name", nullable = false)
    private String fullName;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "phone")
    private Integer phone;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private GenderEnum gender;

    @Column(name = "address")
    private String address;

    @Column(name = "dob")
    private LocalDate dob;

    @Column(name = "note")
    private String note;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private CandidateStatusEnum status;

    @Enumerated(EnumType.STRING)
    @Column(name = "highest_level")
    private HighestLevelEnum highestLevel;

    @Enumerated(EnumType.STRING)
    @Column(name = "position")
    private PositionEnum position;

    @Enumerated(EnumType.STRING)
    @Column(name = "skills")
    private Set<SkillEnum> skills;

    @Column(name = "yoe")
    private Integer yoe;

//    cv attachment
    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(name = "cv_attachment")
    private byte[] cvAttachment;

    @Column(name = "recruiter_id")
    private Long recruiterId;

    @Column(name = "is_deleted", nullable = false , columnDefinition = "bit default 0")
    private Boolean deleted;
}
