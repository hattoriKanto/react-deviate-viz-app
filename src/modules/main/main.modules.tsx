import type React from "react";
import { Box, Container, useTheme } from "@mui/material";
import { Chart, VesselTabs } from "../../components";
import type { DeviationWithMetadata, Vessel } from "../../types";

type MainProps = {
  vessels: Vessel[];
  deviation: DeviationWithMetadata[];
  currentVesselIMONo: number | null;
  setCurrentVesselIMONo: React.Dispatch<React.SetStateAction<number | null>>;
  isVesselsLoading: boolean;
  isDeviationLoading: boolean;
};

export const Main: React.FC<MainProps> = ({
  vessels,
  deviation,
  currentVesselIMONo,
  setCurrentVesselIMONo,
  isVesselsLoading,
  isDeviationLoading,
}) => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        paddingTop: "100px",
        paddingBottom: "60px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flex: 1,
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <Box
          component="section"
          sx={{
            flexBasis: "30%",
            paddingRight: 1,
            borderRightWidth: 1,
            borderRightStyle: "solid",
            borderRightColor: theme.palette.divider,
          }}
        >
          <VesselTabs
            vessels={vessels}
            currentVesselIMONo={currentVesselIMONo}
            setCurrentVesselIMONo={setCurrentVesselIMONo}
            isLoading={isVesselsLoading}
          />
        </Box>
        <Box
          component="section"
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Chart
            deviation={deviation}
            isLoading={isDeviationLoading}
            currentVesselIMONo={currentVesselIMONo}
          />
        </Box>
      </Container>
    </Box>
  );
};
