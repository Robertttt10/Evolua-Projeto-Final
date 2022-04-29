import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/mainRouters";
import { AppThemeProvider } from "./shared/contexts/maniContexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  )
}
