import { AppBar, Box, Container, Typography } from "@mui/material";
import { SvgVessel } from "../../ui";

export const Header = () => {
  return (
    <AppBar>
      <Container>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <SvgVessel />
          <Typography variant="h1">DeviateViz</Typography>
        </Box>
      </Container>
    </AppBar>
  );
};
