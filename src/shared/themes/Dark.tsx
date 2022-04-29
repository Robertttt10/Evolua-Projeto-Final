import { createTheme } from "@mui/material";
import { blue, green, grey } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette:{
    primary:{
      main: blue[500],
      dark: blue[600],
      light:blue[400],
      contrastText: '#ffffff',
    },
    secondary:{
      main: green[500],
      dark: green[600],
      light:green[400],
      contrastText: '#ffffff',
    },
    background:{
      default: grey[400],
      paper: grey[200]
    }
  }
})