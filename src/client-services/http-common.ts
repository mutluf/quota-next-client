import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7180/api/v1",
  //withCredentials: true,
  headers: {
  }
});