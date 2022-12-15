import styled from "styled-components";

export const BarraBase = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 2px 2px 5px 2px #08080830;
`;

export const Barra = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 5px;
  h1 {
    text-align: center;
    color: #00221f;
    margin-right: 5%;
    padding: 5px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 40%;
    padding: 5px;

    @media screen and (max-width:958px) {
    width: 60%;
  }

  @media screen and (max-width:589px) {
   width: 100%;
    
   }
  }
  ul li {
    display: block;
    color: #00221f;
    list-style-type: none;
    text-align: center;
    margin-top: 10px;
    font-size: 23px;
    height: 50%;
    transition: 0.5s;
    &:hover {
      border-bottom: solid 1px #00221f;
      cursor: pointer;
    }

    @media screen and (max-width:958px) {
    
    height: 60%;
    font-size: 20px;

  }

  }
`;