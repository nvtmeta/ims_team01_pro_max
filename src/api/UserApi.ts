import { instanceAxios } from "./axiosConfig";

export const fetchUserList = async () => {
  try {
    const result = await instanceAxios.get(`/user`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserById = async (id: number) => {
  try {
    const result = await instanceAxios.get(`/fetchUserList/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
