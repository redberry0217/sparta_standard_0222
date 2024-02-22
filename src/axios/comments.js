import axios from "axios";
import { authApi } from "./auth";

const commentsAxios = axios.create({
  baseURL: "http://localhost:3001/comments",
  timeout: 1500,
});

commentsAxios.interceptors.request.use();

commentsAxios.interceptors.response.use();

export default commentsAxios;
