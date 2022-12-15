import { Link } from "react-router-dom"
import { LinkStyle } from "../../../style/components/StyledLink";
import { BarraBase, Barra, Nav  } from "../../../style/StyledMenu";

export const Menu = () => {
  return (
    <BarraBase>
      <Barra>
        <h1>Bora Junto!</h1>
        <Nav>
          <ul>
            <li><LinkStyle to='/'>Home</LinkStyle></li>
            <li><LinkStyle to='/Carona'>Carona</LinkStyle></li>
            <li><LinkStyle to='/RegistrarAuto'>Dar Carona</LinkStyle></li>
          </ul>
        </Nav>
      </Barra>
    </BarraBase>
  );
};
