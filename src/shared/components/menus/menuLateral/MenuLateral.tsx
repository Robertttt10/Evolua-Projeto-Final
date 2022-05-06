import styled from "@emotion/styled";
import { AppBar, Divider, Drawer, useTheme } from "@mui/material"
import { Box } from "@mui/system";

export const MenuLateral: React.FC = ({ children }) => {

  const theme = useTheme();
  const drawerWidth = 28
  return (
    <>
      <Drawer variant="permanent">
        <Box width={theme.spacing(drawerWidth)} height='100%' display='flex' flexDirection='column'>
          <Box height={theme.spacing(20)} width='100%' display='flex' alignItems='center' justifyContent='center'>
          </Box>

          <Divider />

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}