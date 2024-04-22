import axios from "axios";

export let baseURL = "http://localhost:8888/api";
export const instanceAxios = axios.create({
  baseURL: `${baseURL}`,
});
