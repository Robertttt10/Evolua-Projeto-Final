import { Box, Button, Card, CardHeader, DialogTitle, Divider, styled, TextField, Toolbar, Typography, useTheme } from "@mui/material"
import { grey } from "@mui/material/colors";
import { display, margin, padding, positions } from "@mui/system";
import { Link } from "react-router-dom";

export const Login: React.FC = () => {

  const theme = useTheme();

  const StyledBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  })

  const LoginForm = styled(Card)({
    height: '70vh',
    display: 'flex',
    margin: 0,
    justifyContent: 'center'
  })

  const InputTextStyled = styled(TextField)({
    width:400,
    marginTop:15
  })

  return (
    <StyledBox>
      <LoginForm>
        <Box sx={{paddingTop:5}}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6">Login</Typography>
          </Box>
          <Box sx={{paddingTop:10, paddingLeft:10, paddingRight:10}}>
            <InputTextStyled
              id="inputEmail"
              label="E-mail"
              variant="standard"
            />
            <Divider />
            <InputTextStyled
              id="inputPassword"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
          </Box>
          <Box sx={{paddingTop:5, paddingLeft:10, paddingRight:10, display:'flex', justifyContent:'space-between'}}>
          <Button  variant="contained" color="secondary" >Entrar</Button>
          <Typography variant="h6"><Link to={'/register'}>Registre-se</Link></Typography>
          </Box>
        </Box>
      </LoginForm>
    </StyledBox>
  )
}