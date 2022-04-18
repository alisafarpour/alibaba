import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import IranYekanRegularWoff from "../public/fonts/woff/iranyekanwebregular(fanum).woff";
import IranSharp from '../public/fonts/iransharp.woff';
import { CenterFocusStrong } from "@mui/icons-material";
// Create a theme instance.
const theme = createTheme({

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "iransharp",
          fontStyle: "normal",
          fontWeight: 400,
          src: `url(${IranSharp}) format('woff')`,
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'main' },
            style: {
              backgroundColor: "#FDB713",
              borderRadius: 8,
              height: 48,
              width: "188px",
              padding: "8px 40px",
              fontSize: "16px",
              fontWeight: "400",
              letterSpacing: "normal",
              lineHeight: 2.5,
              color: "black",
                "&: hover": {
                  backgroundColor: "#da9a00",
                  boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.04), 0 4px 8px 0 raba(0, 0, 0, 0.04), 0 16 px",
                },
            },
        },
        {
          props: { variant: 'ticket' },
            style: {
              backgroundColor: "#0177DB",
              borderRadius: 8,
              height: 40,
              width: "144px",
              padding: "8px 40px",
              fontSize: "16px",
              fontWeight: "400",
              letterSpacing: "normal",
              lineHeight: 2.5,
              color: "white",
                "&: hover": {
                  backgroundColor: "#01569E",
                  boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.04), 0 4px 8px 0 raba(0, 0, 0, 0.04), 0 16 px",
                },
            },
        },
      ]
    },
  },
  
    typography: {
      fontSize: 12,

      fontFamily: ["iransharp", "Roboto"].join(","),
      normalToggle:
      {
        letterSpacing: "normal",
        fontSize: 14,
        lineHeight: 2.2,
        opacity: 1,
        textAlign: "center",
      },
      bold:
      {
        letterSpacing: "normal",
        fontWeight: 900,
        fontSize: 16,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
        opacity: 1,
      },
      h6:
      {
        fontWeight: 900,
        letterSpacing: "normal",
        lineHeight: 5,
        // textAlign: "center",
      },
      subtitle1:
      {
        letterSpacing: "normal",
        lineHeight: 2.2,
        marginTop: 14,
        opacity: 1,
      },
      subtitle2:
      {
        letterSpacing: "normal",
        lineHeight: 2.2,
        fontWeight: 900,
        fontSize: 16,
        marginTop: 14,
        marginBottom: 14,
      },

    },
    direction: "rtl",
    palette: {
      background: {
        default: "#f6f6f6",
        paper: "#fff",
      },
      text: {
        primary: "#173A5E",
        secondary: "#46505A",
      },
      primary: {
        main: "#0177db",
        light: "#e3f2fd",
        dark: "#4a5258",
      },
      secondary: {
        main: "#fdb713",
      },
      error: {
        main: red.A400,
      },
    },
    button: {
      width: "100%",
    },
  });

export default theme;
