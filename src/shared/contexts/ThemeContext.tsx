import { ThemeProvider } from "@mui/material";
import { LightThema, DarkTheme } from "../themes/mainThemes";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Box } from "@mui/system";

interface IThemeContextData{
  themeName: 'Light' | 'Dark';
  toggleTheme: () => void;
}
;
const ThemeContext = createContext({} as IThemeContextData)

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC = ({children}) => {
  const [themeName, setThemeName] = useState<'Light' | 'Dark'>('Light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldTheme => oldTheme === 'Light' ? 'Dark' : 'Light');
  }, [])

  const theme = useMemo(() =>{
    if (themeName === 'Light') return LightThema;
    return DarkTheme;
  },[themeName]);

  return(
    <ThemeContext.Provider value={{themeName, toggleTheme}}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
        {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}