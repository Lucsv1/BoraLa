import { Menu, Login, Register, RegisterAuto, Carona, DarCarona ,  Address} from "./pages/index";
import { GlobalStyled } from "./GlobalStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./pages/Home/Main";
import { Footer } from "./pages/Home/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Menu/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/RegistrarAuto" element={<RegisterAuto/>}/>
        <Route path="/Carona" element={<Carona/>}/>
        <Route path="/DarCarona" element={<DarCarona/>}/> 
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Address" element={<Address/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
