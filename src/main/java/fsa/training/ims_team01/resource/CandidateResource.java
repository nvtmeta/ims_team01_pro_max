package fsa.training.ims_team01.resource;

import fsa.training.ims_team01.model.dto.candidateDto.CandidateCreateDto;
import fsa.training.ims_team01.model.dto.candidateDto.CandidateListDto;
import fsa.training.ims_team01.model.entity.Candidate;
import fsa.training.ims_team01.service.CandidateService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/candidate")
public class CandidateResource {

    private final CandidateService candidateService;

    public CandidateResource(CandidateService candidateService) {
        this.candidateService = candidateService;
    }

    @GetMapping
    public Page<CandidateListDto> getCandidates(
            @PageableDefault Pageable pageable
    ) {
        return candidateService.getCandidateList(pageable);
    }

    @PostMapping
    public ResponseEntity<Candidate> createCandidate(@RequestBody @Valid CandidateCreateDto candidateCreateDto) {
        System.out.println("test");
        System.out.println("candidateCreateDto: " + candidateCreateDto);
        Candidate candidate = candidateService.createCandidate(candidateCreateDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(candidate);
    }

}
