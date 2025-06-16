import { create } from "zustand";
import type { Vessel } from "../types";

type VesselsStore = {
  vessels: Vessel[];
  currentVesselIMONo: number | null;
  setCurrentVessel: (newIMONo: number) => void;
  setVessels: (newVessels: Vessel[]) => void;
};

export const useVesselsStore = create<VesselsStore>()((set) => ({
  vessels: [],
  currentVesselIMONo: null,
  setCurrentVessel: (newIMONo) => set({ currentVesselIMONo: newIMONo }),
  setVessels: (newVessels) => set({ vessels: newVessels }),
}));
