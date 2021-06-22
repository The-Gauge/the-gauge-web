import axios from "axios";
import { apiUrl } from "../urlConstants";


const axiosIntance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
});

export default axiosIntance;