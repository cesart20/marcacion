import axios from "axios";
export default axios.create({
  baseURL: `http://192.168.100.174:8000/api/`,
});
