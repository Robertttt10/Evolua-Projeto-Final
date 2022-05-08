import { Box, Button, Typography } from "@mui/material"
import { blueGrey, red } from "@mui/material/colors"
import { useNavigate } from "react-router-dom";

export const Videogame: React.FC = () => {

  const navigate = useNavigate();
  return(
    <Box sx={{ height:'100vh', bgcolor: blueGrey[500] }}>      
      <Button variant="contained" color="secondary" onClick={() => navigate('/product-register')}>Adicionar Produtos</Button>
      <Typography variant="h6"> Videogames </Typography>
    </Box>
  )
}