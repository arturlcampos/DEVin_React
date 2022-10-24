import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../../pages/Login/index";
import ListaProduct from  "../../pages/ListProduct/index"
import Maps from "../../pages/Maps/index"
import NotFound from "../../pages/NotFound/index"
import RegisterCompany from "../../pages/RegisterCompany/index"
import RegisterProduct from "../../pages/RegisterProduct/index"
import PrivateRoute from "../PrivateRoute/index"
import NavBar from "../Navbar/index"



export default function AllRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<PrivateRoute />} >
        <Route path="/maps" element={<Maps />} />
        
        <Route path="/registercompany" element={<RegisterCompany />} />
        <Route path="/registerproduct" element={<RegisterProduct />} />
        <Route path="/listproduct" element={<ListaProduct />} />
        </Route>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/login" element={<Navigate replace to="/" />} />      
       
        <Route path="*" element={<NotFound />} />        
      </Routes>
    </BrowserRouter>
  );
}
