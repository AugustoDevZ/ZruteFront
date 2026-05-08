import axios from "axios";

const zruteApi = axios.create({

  baseURL: "http://localhost:3000/zrute",

  headers: {
    "Content-Type": "application/json"
  }
});

export default zruteApi;