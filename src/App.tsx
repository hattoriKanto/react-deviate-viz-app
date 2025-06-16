import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Header, Main } from "./modules";
import { fetchAllVessels } from "./api";
import { useAppStore, useVesselsStore } from "./stores";

export const App = () => {
  const { setVessels, setCurrentVessel } = useVesselsStore();
  const { setIsLoading } = useAppStore();
  const { error, isLoading, data } = useQuery({
    queryFn: fetchAllVessels,
    queryKey: ["vessels"],
  });

  useEffect(() => {
    if (data) {
      setVessels(data);
      setCurrentVessel(data[0].IMONo);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast("Something went wrong, try again later!", {
        type: "error",
        position: "top-center",
        theme: "dark",
      });
      console.error(error);
    }
  }, [error]);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  return (
    <>
      <Header />
      <Main />
      <ToastContainer />
    </>
  );
};
