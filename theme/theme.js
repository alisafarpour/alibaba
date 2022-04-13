import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';



// Create a theme instance.
const theme = createTheme({
  typography: {
    fontSize: 14,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  direction: 'rtl',
  palette: {
    background: {
      default: "#f6f6f6",
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    primary: {
      main: '#0177db',
      light: '#e3f2fd',
      dark: '#4a5258',
    },
    secondary: {
      main: '#fdb713',
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