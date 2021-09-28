import axios from "axios";
import { SERVER } from "./server";

export const getFeedbacks = async () => {
  let res = await axios.get(`${SERVER}/feedbacks`);
  return res.data;
};
