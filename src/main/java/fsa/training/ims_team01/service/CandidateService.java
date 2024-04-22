package fsa.training.ims_team01.service;

import fsa.training.ims_team01.model.dto.candidateDto.CandidateCreateDto;
import fsa.training.ims_team01.model.dto.candidateDto.CandidateListDto;
import fsa.training.ims_team01.model.entity.Candidate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CandidateService {

    //    list candidate
    public Page<CandidateListDto> getCandidateList(Pageable pageable);

    //    create candidate
    public Candidate createCandidate(CandidateCreateDto candidateCreateDto);
}
