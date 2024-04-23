package fsa.training.ims_team01.service.impl;

import fsa.training.ims_team01.exception.DuplicateEmailException;
import fsa.training.ims_team01.model.dto.candidateDto.CandidateCreateDto;
import fsa.training.ims_team01.model.dto.candidateDto.CandidateListDto;
import fsa.training.ims_team01.model.entity.Candidate;
import fsa.training.ims_team01.repository.CandidateRepository;
import fsa.training.ims_team01.service.CandidateService;
import fsa.training.ims_team01.util.EmailValidationUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class CandidateServiceImpl implements CandidateService {
    private final CandidateRepository candidateRepository;

    public CandidateServiceImpl(CandidateRepository candidateRepository) {
        this.candidateRepository = candidateRepository;
    }

    @Override
    public Page<CandidateListDto> getCandidateList(Pageable pageable) {
        return candidateRepository.findAllByDeletedFalse(pageable);
    }

    @Override
    public Candidate createCandidate(CandidateCreateDto candidateCreateDto) {
        Candidate candidate = new Candidate();
        BeanUtils.copyProperties(candidateCreateDto, candidate);
        if (!EmailValidationUtils.isEmailUnique(candidate.getEmail(), candidateRepository)) {
            throw new DuplicateEmailException("Email already exists");
        }

        candidate = candidateRepository.save(candidate);
        return candidate;
    }
}
