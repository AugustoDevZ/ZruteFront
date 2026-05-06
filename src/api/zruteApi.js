import axios from "axios";

const zruteApi = axios.create({

  baseURL: "https://localhost:7156/zrute",

  headers: {
    "Content-Type": "application/json"
  }
});

export default zruteApi;