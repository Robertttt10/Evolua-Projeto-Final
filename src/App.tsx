import { AppBar, Box, styled } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/mainRouters";
import { MenuLateral } from "./shared/components/menus/mainMenu";
import { MenuNavTop } from "./shared/components/menus/menuNavTop/MenuNavTop";
import { AppThemeProvider } from "./shared/contexts/maniContexts";

export const App = () => {

   return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuNavTop />
        <Box sx={{paddingTop:8}}>
          <AppRoutes />
        </Box>
      </BrowserRouter>
    </AppThemeProvider>
  )
}
