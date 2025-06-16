import { Box, Container, useTheme } from "@mui/material";
import { VesselTabs } from "../../components";

export const Main = () => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        paddingBlock: "100px",
      }}
    >
      <Container sx={{ display: "flex", flex: 1 }}>
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
        <Box component="section"></Box>
      </Container>
    </Box>
  );
};
