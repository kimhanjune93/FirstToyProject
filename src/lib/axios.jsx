import axios from "axios";
import dotenv from "dotenv";
import {getCookie} from "../shared/getCookie";
dotenv.config();
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    Authorization: `${getCookie("cookie_name")}`
  },
//   withCredentials: true,
});

export const apis = {
    getTest : () => instance.get("/info"),
}
