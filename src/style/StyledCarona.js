import styled from "styled-components";
import { ButtonCard } from "./components/StyledBotao";

export const BotaoLocalizar = styled(ButtonCard)`
  background-color: blue;
  height: 50px;
  margin-top: 33px;
`;

export const DivBase = styled.div`
  display: flex;
  justify-content: center;
  

  h2 {
    position: absolute;
    margin-top: 20px;
  }
  h3 {

    @media screen and (max-width: 573px) {
    
    width: 80%;
    text-align: center;
    }

    position: absolute;
    margin-top: 60px;
  }
`;
export const DivContent = styled.div`
  display: flex;
  position: relative;
  top: 50px;
  margin-top: 50px;
  margin-bottom: 304px;
  box-shadow: 0px 2px 5px 0px #4e4a4a3f;
  border-radius: 10px;
  padding: 30px;
  width: 70%;
`;
