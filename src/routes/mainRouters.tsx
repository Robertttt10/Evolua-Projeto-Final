import { Button } from "@mui/material"
import { Navigate, Route, Routes } from "react-router-dom"
import { Carro, ProductRegister, Roupa, Videogame } from "../pages/Products/mainProducts";
import { Login } from "../shared/components/login/Login";
import { Register } from "../shared/components/login/Register";
import { useAppThemeContext } from "../shared/contexts/ThemeContext"


export const AppRoutes = () => {

  const { toggleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="secondary" onClick={toggleTheme}>Teste</Button>} />    
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/product-register" element={<ProductRegister/>} />
      <Route path="/carro" element={<Carro/>} />
      <Route path="/roupa" element={<Roupa/>} />
      <Route path="/videogame" element={<Videogame/>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}