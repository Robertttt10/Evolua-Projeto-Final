import { ShoppingCart, NotificationsActive } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, Button, IconButton, ListItem, ListItemButton, styled, Toolbar, Typography, } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

export const MenuNavTop = () => {

  const navigate = useNavigate()

  const StyledToobar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  })

  return (
    <AppBar position="fixed" sx={{ display:'flex', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <StyledToobar >
        <Box> <Typography variant="h6">CompraTudoAí</Typography></Box>
        <Box>
          <ListItem>
            <ListItemButton onClick={() => navigate('carro')}>Carros</ListItemButton>
            <ListItemButton onClick={() => navigate('videogame')}>Videogames</ListItemButton>
            <ListItemButton onClick={() => navigate('roupa')}>Roupas</ListItemButton>
          </ListItem>
        </Box>
        <Box sx={{ flexGrow: 0, display: 'flex', gap: '20px' }}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsActive />
            </Badge>
          </IconButton>
          <Button onClick={() => navigate('login')}  color="inherit">Login</Button>
        </Box>
      </StyledToobar>
    </AppBar>
  )
}
