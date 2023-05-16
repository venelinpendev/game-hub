import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "029924e09a1f42dfbe464b8774f53caa"
  }
})