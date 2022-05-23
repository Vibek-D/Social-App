/* eslint-disable import/no-anonymous-default-export */
import { createTheme } from "@mui/material/styles";
import { themePalette } from "./palette";
import { themeTypography } from "./typography";
import { DARK, LIGHT, greyDark, greyLight } from "./colors";

export default (mode = "light") => {
  const palettes = mode === "dark" ? DARK : LIGHT;
  const grey = mode === "dark" ? greyDark : greyLight;

  const themeOptions = {
    palettes,
    grey,
    mode,
  };
  const typography = themeTypography(themeOptions);
  const palette = themePalette(themeOptions);

  const theme = createTheme({
    typography,
    palette: {
      ...palette,
      action: {
        selectedOpacity: 0.3,
      },
    },
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "small",
            },
            style: {
              fontSize: 10,
            },
          },
        ],
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiLink: {
        defaultProps: {
          underline: "hover",
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 1,
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            padding: 7,
            "&.Mui-checked": {
              "& $thumb": {
                backgroundColor: "#fff",
              },
              "& + $track": {
                opacity: "1 !important",
              },
            },
          },
          thumb: {
            width: 24,
            height: 24,
            backgroundColor: "#fff",
            boxShadow:
              "0 0 12px 0 rgba(0,0,0,0.08), 0 0 8px 0 rgba(0,0,0,0.12), 0 0 4px 0 rgba(0,0,0,0.38)",
          },
          switchBase: {
            color: "rgba(0,0,0,0.38)",
            padding: 7,
          },
          track: {
            borderRadius: 20,
          },
          focusVisible: {},
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderColor: grey[300],
          },
        },
      },
    },
    shape: 4,
  });
  return theme;
};
