import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import { Header, Main } from "./modules";
import { calculateDeviationForVessel, fetchAllVessels } from "./api";

export const App = () => {
  const [currentVesselIMONo, setCurrentVesselIMONo] = useState<number | null>(
    null
  );

  const {
    data: vessels = [],
    error: vesselError,
    isLoading: isVesselsLoading,
  } = useQuery({
    queryFn: async () => {
      const result = await fetchAllVessels();
      if (result[0]) {
        setCurrentVesselIMONo(result[0].IMONo);
      }
      return result;
    },
    queryKey: ["vessels"],
  });

  const {
    data: deviation = [],
    error: deviationError,
    isLoading: isDeviationLoading,
  } = useQuery({
    queryFn: () => calculateDeviationForVessel(currentVesselIMONo!),
    queryKey: ["deviation", currentVesselIMONo],
    enabled: !!currentVesselIMONo,
  });

  if (deviationError || vesselError) {
    toast("Something went wrong, try again later!", {
      type: "error",
      position: "top-center",
      theme: "dark",
    });
    if (deviationError) {
      console.error(deviationError);
    } else {
      console.error(vesselError);
    }
  }

  return (
    <>
      <Header />
      <Main
        vessels={vessels}
        deviation={deviation}
        isVesselsLoading={isVesselsLoading}
        isDeviationLoading={isDeviationLoading}
        currentVesselIMONo={currentVesselIMONo}
        setCurrentVesselIMONo={setCurrentVesselIMONo}
      />
      <ToastContainer />
    </>
  );
};
