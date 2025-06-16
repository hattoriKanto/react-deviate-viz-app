import "@mui/material/styles";
import type { PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    accent?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    error?: PaletteColorOptions;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    primary: true;
    secondary: true;
    accent: true;
    warning: true;
    error: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primary: true;
    secondary: true;
    accent: true;
    warning: true;
    error: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsColorOverrides {
    primary: true;
    secondary: true;
    accent: true;
    warning: true;
    error: true;
  }
}
