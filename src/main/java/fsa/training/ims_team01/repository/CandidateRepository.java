package fsa.training.ims_team01.repository;

import fsa.training.ims_team01.model.dto.candidateDto.CandidateListDto;
import fsa.training.ims_team01.model.entity.Candidate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {

    @Query(value = """
                    SELECT new fsa.training.ims_team01.model.dto.candidateDto.CandidateListDto(
                c.id, c.fullName, c.email, c.phone, c.status, c.highestLevel, c.position, u.fullName
            )
                    FROM Candidate c
                     JOIN User u ON c.user.id = u.id
                     WHERE c.deleted = false
                    """)
    Page<CandidateListDto> findAllByDeletedFalse(Pageable pageable);

}
