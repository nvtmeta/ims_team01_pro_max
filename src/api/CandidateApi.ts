import { CandidateInterfaceCreate } from "./../interface/CandidateInterface";
import { instanceAxios } from "./axiosConfig";

export const fetchCandidatePage = async (page: number, size: number) => {
  try {
    const result = await instanceAxios.get(
      `/candidate?size=${size}&page=${page}`
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchCandidatePost = async (
  candidateInterfaceCreate: CandidateInterfaceCreate
) => {
  try {
    const result = await instanceAxios.post(
      `/candidate`,
      candidateInterfaceCreate
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCandidateById = async (id: number) => {
  try {
    const result = await instanceAxios.get(`/candidate/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
