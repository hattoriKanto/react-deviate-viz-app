import axios from "axios";
import type { DeviationWithMetadata, Vessel } from "../types";

const url = import.meta.env.VITE_API_URL;

export const fetchAllVessels = async (): Promise<Vessel[]> => {
  const vessels = await axios.get(url + "/vessels");
  return vessels.data;
};

export const calculateDeviationForVessel = async (
  IMONo: number
): Promise<DeviationWithMetadata[]> => {
  const vessels = await axios.get(url + `/vessels/${IMONo}/deviation`);
  return vessels.data;
};
