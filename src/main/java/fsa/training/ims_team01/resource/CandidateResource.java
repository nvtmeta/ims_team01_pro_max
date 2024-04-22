package fsa.training.ims_team01.resource;

import fsa.training.ims_team01.model.dto.candidateDto.CandidateListDto;
import fsa.training.ims_team01.service.CandidateService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
