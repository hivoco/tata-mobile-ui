// axiosInstance.js

import axios from "axios";

const instance = axios.create({
  baseURL: "https://demo.m.thefirstimpression.ai/api",
  // baseURL: "https://tata-dep.vercel.app/api",

  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
