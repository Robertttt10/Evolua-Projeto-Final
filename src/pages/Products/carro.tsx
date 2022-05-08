import { Box, Button, Typography } from "@mui/material"
import { red } from "@mui/material/colors"
import { useNavigate } from "react-router-dom";

export const Carro:React.FC = () => {

  const navigate = useNavigate();
  
  return(
    <Box sx={{height:'100vh', bgcolor: red[500] }}>      
      <Button variant="contained" color="secondary" onClick={() => navigate('/product-register')}>Adicionar Produtos</Button>
      <Typography variant="h6"> CARROS </Typography>
    </Box>
  )
}