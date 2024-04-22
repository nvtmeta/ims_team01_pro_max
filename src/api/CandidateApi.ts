import { instanceAxios } from "./axiosConfig";

export const fetchCandidateList = async () => {
  try {
    const result = await instanceAxios.get(`/candidate`);
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
