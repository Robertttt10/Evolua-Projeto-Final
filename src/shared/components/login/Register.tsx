import { Box, Button, Card, CardHeader, DialogTitle, Divider, styled, TextField, Toolbar, Typography, useFormControl, useTheme } from "@mui/material"
import { grey } from "@mui/material/colors";
import { display, margin, padding, positions, width } from "@mui/system";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../Api";
import FetchAPI from "../../../FetchAPI";
import { CTextField } from "../Forms/CTextField";

export const Register: React.FC = () => {


  const theme = useTheme();

  const navigate = useNavigate();

  const FormControl = useFormControl();

  const [validateConfirmPassword, setValidate] = useState(false)

  const [helperText, setHelperText] = useState('')

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

  const InputTextStyled = styled(CTextField)({
    width: 400,
    marginTop: 20,
  })

  interface IInputRegister {
    inputName: string,
    inputEmail: string,
    inputPassword: string,
    inputConfirmPassword: string,
  }

  const handleSubmitRegister = async (dados: IInputRegister) => {
    api.get('users').then((response) => {
      console.log(response);
    })

    if (dados.inputPassword !== dados.inputConfirmPassword) {
      alert('Senha de confirmação deve ser igual a senha')
      setValidate(true)
      setHelperText('Favor verificar este campo')
    } else {
      console.log('teste');
      const response = await FetchAPI({url:'users', method:'GET'});
      console.log(response);
           
      const data = {
        name: dados.inputName,
        userGroup: "User",
        email: dados.inputEmail,
        password: dados.inputPassword,
        isActive: true

      }
    }
  }

  return (
    <StyledBox>
      <LoginForm>
        <Box sx={{ paddingTop: 5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6">Registro</Typography>
          </Box>
          <Form onSubmit={handleSubmitRegister}>
            <Box sx={{ paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}>
              <InputTextStyled
                required
                error={validateConfirmPassword}
                name="inputName"
                label="Nome"
                variant="standard"
              />
              <Divider />
              <InputTextStyled
                required
                name="inputEmail"
                label="E-mail"
                type="email"
                variant="standard"
              />
              <Divider />
              <InputTextStyled
                required
                name="inputPassword"
                label="Senha"
                type="password"
                autoComplete="current-password"
                variant="standard"
              />
              <Divider />
              <InputTextStyled
                required
                name="inputConfirmPassword"
                label="Confirmar Senha"
                type="password"
                autoComplete="current-password"
                variant="standard"
                helperText={helperText}
              />
            </Box>
            <Box sx={{ paddingTop: 5, paddingLeft: 10, paddingRight: 10, display: 'flex', justifyContent: 'right' }}>
              <Button sx={{ marginRight: 2 }} type="submit" variant="contained" color="secondary" >Enviar</Button>
              <Button onClick={() => navigate('*')} variant="contained" color="secondary" >Cancelar</Button>
            </Box>
          </Form>
        </Box>
      </LoginForm>
    </StyledBox>
  )
}
