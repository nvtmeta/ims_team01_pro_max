import {
  CandidateStatusEnum,
  HighestLevelEnum,
  PositionEnum,
} from "@/enum/CandidateEnum";
import { GenderEnum } from "@/enum/GenderEnum";
import { SkillEnum } from "@/enum/SkillEnum";

export interface CandidateResponseInterface {
  content: CandidateInterface[];
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

export interface CandidateInterface {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  status: CandidateStatusEnum;
  highestLevel: HighestLevelEnum;
  recruiterName: string;
  position: PositionEnum;
}

export interface RecruiterInterface {
  id: number;
  fullName: string;
}

export interface CandidateInterfaceCreate {
  fullName: string;
  email: string;
  phone: number;
  gender: GenderEnum; // Assuming GenderEnum is defined elsewhere
  address: string;
  dob: string; // Assuming LocalDate is converted to a string for representation
  note?: string; // Optional string field
  status: CandidateStatusEnum; // Assuming CandidateStatusEnum is defined elsewhere
  highestLevel: HighestLevelEnum; // Assuming HighestLevelEnum is defined elsewhere
  position: PositionEnum; // Assuming PositionEnum is defined elsewhere
  skill?: SkillEnum; // Optional SkillEnum field
  yoe?: number; // Optional number field
  cvAttachment: string; // Assuming cvAttachment is converted to base64 encoded string
  recruiterId: number;
}
