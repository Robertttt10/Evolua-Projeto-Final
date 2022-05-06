import { Box, Typography } from "@mui/material"
import { blueGrey, red } from "@mui/material/colors"



export const Videogame = () => {
  return(
    <Box sx={{ height:'100vh', bgcolor: blueGrey[500] }}>
      <Typography variant="h6"> Videogames </Typography>
    </Box>
  )
}