package fsa.training.ims_team01.model.entity;

import fsa.training.ims_team01.enums.candidateEnum.CandidateStatusEnum;
import fsa.training.ims_team01.enums.commonEnum.GenderEnum;
import fsa.training.ims_team01.enums.commonEnum.PositionEnum;
import fsa.training.ims_team01.enums.commonEnum.SkillEnum;
import fsa.training.ims_team01.enums.userEnum.GenderUserEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

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

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "phone")
    private String phone;

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
    private CandidateStatusEnum highestLevel;

    @Enumerated(EnumType.STRING)
    @Column(name = "position")
    private PositionEnum position;

    @Enumerated(EnumType.STRING)
    @Column(name = "skill")
    private SkillEnum skill;

    @Column(name = "yoe")
    private Integer yoe;

//    cv attachment
    @Lob
    @Basic(fetch = FetchType.LAZY)
    @Column(name = "cv_attachment")
    private byte[] cvAttachment;

//    recruiter
    @ManyToOne
    @JoinColumn(name = "recruiter_id")
    private User user;

    @Column(name = "is_deleted", nullable = false , columnDefinition = "bit default 0")
    private Boolean deleted;
}
