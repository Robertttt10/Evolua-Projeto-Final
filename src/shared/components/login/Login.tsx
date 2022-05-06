import { Box, Card, CardHeader, DialogTitle, Divider, styled, TextField, Toolbar, Typography, useTheme } from "@mui/material"
import { grey } from "@mui/material/colors";
import { padding, positions } from "@mui/system";

export const Login: React.FC = () => {

  const theme = useTheme();

  const StyledBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    paddingTop: 50

  })

  const LoginForm = styled(Card)({
    height: '70vh',
    width: '25vw',
    alignItems: 'center',
    justifyContent: 'center'
  })

  const InputTextStyled = styled(TextField)({
    justifyContent: 'center',
    margin: 20
  })

  return (
    <StyledBox>
      <LoginForm>
        <Typography sx={{display:'flex',justifyContent:'center'}} variant="h6">Login</Typography>
        <Box sx={{display:'flex', flexDirection:'column', justifycontent:'center'}}>
        <InputTextStyled 
          id="inputEmail"
          label="E-mail"
          autoComplete="current-password"
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
      </LoginForm>
      <LoginForm sx={{}}>
        <Typography sx={{justifyContent:'center'}} variant="h6">Login</Typography>
        <InputTextStyled
          id="inputEmail"
          label="E-mail"
          autoComplete="current-password"
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
      </LoginForm>
    </StyledBox>
  )
}