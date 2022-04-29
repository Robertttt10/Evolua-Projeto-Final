import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/mainRouters";
import { LightThema } from "./shared/themes/Light";

export const App = () => {
  return (
    <ThemeProvider theme={LightThema}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
