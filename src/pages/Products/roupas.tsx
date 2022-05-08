import { Box, Button, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom"

export const Roupa: React.FC = () => {

  const navigate = useNavigate();
  
  return (
    <Box sx={{ height: '100vh', bgcolor: grey[100] }}>
      <Button variant="contained" color="secondary" onClick={() => navigate('/product-register')}>Adicionar Produtos</Button>
      <Typography variant="h6"> Roupas </Typography>
    </Box>
  )
}