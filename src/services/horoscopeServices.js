import axios from "axios";
import { SERVER } from "./server";

export const getHoroscope = async () => {
  let res = await axios.get(`${SERVER}/horoscope`);
  return res.data;
};
