import { Box, Button, Card, CardHeader, DialogTitle, Divider, styled, TextField, Toolbar, Typography, useFormControl, useTheme } from "@mui/material"
import { grey } from "@mui/material/colors";
import { display, margin, padding, positions, width } from "@mui/system";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FetchAPI from "../../FetchAPI";
import { CTextField } from "../../shared/components/Forms/mainForms";

export const ProductRegister: React.FC = () => {

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
    height: '80vh',
    display: 'flex',
    margin: 0,
    justifyContent: 'center'
  })

  const InputTextStyled = styled(CTextField)({
    width: 400,
    marginTop: 20,
  })

  interface IInputRegister {
    inputProductName: string,
    inputProductType: string,
    inputProductCode: string,
    inputProductDescription: string,
    inputPrice: string,
    inputQuantity: string,
    inputImagem: string,
  }

  const handleSubmitRegister = async (dados: IInputRegister) => {

    const dataImg = new FormData();

    dataImg.append('image', dados.inputImagem[0])

    console.log(dados.inputImagem);
    

    const data = {
      product_name: dados.inputProductName,
      product_type: dados.inputProductType,
      product_description: dados.inputProductDescription,
      product_number: dados.inputProductCode,
      image:dados.inputImagem,
      quantity: dados.inputQuantity,
      price: dados.inputPrice
    }

    const response = await FetchAPI({ url: 'products/new-product', method: 'POST', body: data });
    console.log(JSON.stringify(response));
  }

  const analisaUpload = () => {
    console.log(analisaUpload);    
  }

  const form = document.getElementById('upload') 
    form?.addEventListener('submit', analisaUpload)

  return (
    <StyledBox>
      <LoginForm>
        <Box sx={{ paddingTop: 5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6">Registro</Typography>
          </Box>
          <Form id="upload" onSubmit={handleSubmitRegister}>
            <Box sx={{ paddingTop: 5, paddingLeft: 10, paddingRight: 10 }}>
              <InputTextStyled
                required
                name="inputProductName"
                label="Produto"
                variant="standard"
              />
              <Divider />
              <InputTextStyled
                required
                name="inputProductType"
                label="Tipo"
                variant="standard"
              />
              <Divider />
              <InputTextStyled
                required
                name="inputProductCode"
                label="Código"
                variant="standard"
              />
              <Divider />
              <InputTextStyled
                name="inputProductDescription"
                label="Descrição"
                variant="standard"
              />
              <Divider />
              <InputTextStyled
                required
                name="inputQuantity"
                label="Quantidade"
                variant="standard"
              />
              <Divider />
              <InputTextStyled
                required
                name="inputPrice"
                label="Preço"
                variant="standard"
              />
              <Divider />
              <InputTextStyled
                required
                name="inputImagem"
                label="Imagem"
                type="file"
                variant="standard"
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
