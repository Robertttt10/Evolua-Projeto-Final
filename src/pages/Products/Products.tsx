import Box from "@mui/material/Box";
import RecipeReviewCard from "./card";


export default function Products() {
  return (
    <Box sx={{ display: 'flex' }}
    position = "relative"
    paddingTop={8}
    >
      <RecipeReviewCard />
    </Box>
  )
}
