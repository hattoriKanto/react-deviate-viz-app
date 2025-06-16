import { Box, Container, useTheme } from "@mui/material";
import { Chart, VesselTabs } from "../../components";

export const Main = () => {
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
          <VesselTabs />
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
          <Chart />
        </Box>
      </Container>
    </Box>
  );
};
