import axios from "axios";
import type { Vessel } from "../types";

const url = import.meta.env.VITE_API_URL;

export const fetchAllVessels = async (): Promise<Vessel[]> => {
  const vessels = await axios.get(url + "/deviation");
  return vessels.data;
};
