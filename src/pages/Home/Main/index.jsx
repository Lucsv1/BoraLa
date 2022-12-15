import { useState } from "react";
import { Link } from "react-router-dom";
import Moto from "../../../img/Foto.svg";
import { LinkStyle } from "../../../style/components/StyledLink";
import {
  DivBaseMain,
  DivTextBase,
  DivText,
  DivImg,
  DivLog,
  LiLogar,
  LiRegister,
} from "../../../style/StyledMain";

export const Main = () => {
 

  return (
    <DivBaseMain>
      <DivTextBase>
        <DivText>
          <h4>Torne-se um condutor Bora Junto!</h4>
          <p><span>Conectando</span> caminhos, conectando <span>pessoas!</span></p> 
          <p>
            <span>Economize</span> nos gastos da sua viagem{" "}
            <span>compartilhando</span> caronas com passageiros.
          </p>
        </DivText>
        <DivLog>
          <LinkStyle to="/Login">
            <LiLogar>Entre</LiLogar>
          </LinkStyle>
          <LinkStyle to="/Register">
            <LiRegister>Cadastre-se</LiRegister>
          </LinkStyle>
        </DivLog>
      </DivTextBase>
      <DivImg>
        <img src={Moto} alt="" />
      </DivImg>
    </DivBaseMain>
  );
};
