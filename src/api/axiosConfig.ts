import axios from "axios";

export let baseURL = "http://localhost:8888/api/v1";
export const instanceAxios = axios.create({
  baseURL: `${baseURL}`,
});
