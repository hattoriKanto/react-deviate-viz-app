import { Box, Skeleton, Tab, Tabs, Typography } from "@mui/material";
import { useAppStore, useVesselsStore } from "../../stores";

export const VesselTabs = () => {
  const { vessels, currentVesselIMONo, setCurrentVessel } = useVesselsStore();
  const { isLoading } = useAppStore();
  const currentIndex = vessels.findIndex(
    (vessel) => vessel.IMONo === currentVesselIMONo
  );

  const handleTabChange = (_: React.SyntheticEvent, newIndex: number) => {
    const selectedVessel = vessels[newIndex];
    if (selectedVessel) {
      setCurrentVessel(selectedVessel.IMONo);
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={210}
          height={40}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={210}
          height={40}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={210}
          height={40}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={210}
          height={40}
        />
      </Box>
    );
  }

  if (vessels.length === 0) {
    return (
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="body1">No vessels</Typography>
      </Box>
    );
  }

  return (
    <Tabs
      value={currentIndex}
      onChange={handleTabChange}
      orientation="vertical"
      textColor="secondary"
      indicatorColor="secondary"
    >
      {vessels.map((vessel) => {
        return (
          <Tab
            sx={{ alignItems: "start" }}
            key={vessel.IMONo}
            label={vessel.Name}
          />
        );
      })}
    </Tabs>
  );
};
