import styled from "styled-components";


export const DivBaseMain = styled.div`
  display: flex;
  padding: 10px;
  @media screen and (max-width:768px) {
    flex-direction: column;
  }

 
`;
export const DivTextBase = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DivText = styled.div`
  padding: 10px;
  display: contents;
  flex-direction: column;
  justify-content: end;
  position: relative;
  top: 30px;

  h4 {
    text-align: center;
    position: relative;
    left: 19%;
    margin-bottom: 30px;
    width: 60%;
    font-size: 40px;
    @media screen and (max-width:1203px) {
      font-size: 30px;
  }
  }

  p {
    position: relative;
    left: 14%;
    margin-bottom: 15px;
   
    font-size: 40px;
    text-align: center;
    width: 70%;
    bottom: 20px;

    @media screen and (max-width:1203px) {
     
     font-size: 30px;
 }
  }

  span {
    font-family: Arial, Helvetica, sans-serif;
    color: #00221f;
  }
`;

export const DivImg = styled.div`
  padding: 10px;

  img {
    border-radius: 10px;
    height: 500px;
    width: 500px;

    @media screen and (max-width:1203px) {
      height: 400px;
      width: 400px;
      
    
  }

  @media screen and (max-width:768px) {
    position: relative;
    left: 20%;
    right: 50%;
    margin-top: 10px;
  }

  @media screen and (max-width:566px) {
    position: relative;
    left: 1%;
    width: 100%;
   
    margin-top: 10px;
  }

  }
`;

export const DivLog = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  position: relative;
  top: 30px;
  left: 23%;

  @media screen and (max-width:1203px) {
    display: block;
    justify-content: center;
    flex-direction: column;
   
    top: 10px;
    width: 30%;
    left: 34%;
    padding: 15px;
  }

  @media screen and (max-width:1026px) {
    width: 34%;
    left: 30%;
  }

  @media screen and (max-width:958px) {
    width: 37%;
    left: 30%;
  }

  @media screen and (max-width:919px) {
    width: 45%;
    left: 26%;
  }

  @media screen and (max-width:837px) {
    width: 54%;
    left: 21%;
  }



  @media screen and (max-width:779px) {
    width: 55%;
    left: 21%;
  }

  @media screen and (max-width:768px) {
    width: 30%;
    left: 35%;
    height: 180px;
    top: 20px;
  }

  @media screen and (max-width:566px) {
   width: 50%;
   left: 25%;
    
   }

  
`;

export const LiLogar = styled.p`
  text-align: center;
  border: solid;
  color: #00221f;
  width: 130%;
  padding: 20px;
  border-radius: 15px;
  list-style-type: none;
  text-decoration: none;
  transition: 0.5s;
  box-shadow: 1px 1px 10px 0px #0000002a;
  &:hover {
    cursor: pointer;
    background-color: #00221f;
    color: white;
  }

  @media screen and (max-width:1203px) {
    width: 100%;
    margin-bottom: 10px;
  }

  
`;

export const LiRegister = styled.p`
  text-align: center;
  background-color: #00221f;
  color: white;
  border: solid;
  padding: 20px;
  list-style-type: none;
  border-radius: 15px;
  margin-left: 10%;
  transition: 0.5s;
  width: 110%;
  box-shadow: 1px 1px 10px 0px #0000002a;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: #00221f;
  }

  @media screen and (max-width:1203px) {
    width: 100%;
    margin-left: 0;
  }
`;






