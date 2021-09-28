import axios from "axios";
import { SERVER } from "./server";

export const getAstros = async () => {
  let res = await axios.get(`${SERVER}/astro`);
  return res.data;
};
