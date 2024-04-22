export interface CandidateResponseInterface {
  content: UserInterface[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface UserInterface {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  status: CandidateStatusEnum;
  highestLevel: HighestLevelEnum;
  recruiterName: string;
  position: PositionEnum;
}
