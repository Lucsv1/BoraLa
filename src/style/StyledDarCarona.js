import { DivContent } from "./StyledCarona";
import styled from "styled-components";
import { BotaoLocalizar } from "./StyledCarona";

export const DivCheck = styled.div`
display: flex;
flex-direction: column;

span{
 position: relative;
 width: 10%;
 left: 10%;
 bottom: 16px;

 @media screen and (max-width:589px) {
   left: 10%;
   bottom: 15px;
    
   }
 
}

label{
   border: saolid;

   @media screen and (max-width:589px) {
   text-align: justify;
   font-size: 15px;
    
   }
}

`


export const LabelBox = styled.label`

@media screen and (max-width:589px) {
   text-align: justify;
   font-size: 15px;
    
   }

`

export const CheckBox = styled.input`
width: 10%;
border: solid;
margin-top:10px;


`

export const DivDarCarona = styled(DivContent)`
display: inline;

`

export const BotaoIniciar = styled(BotaoLocalizar)`
padding: 15px;
color: #FFFFFF;
width: 20%;
background-color: #00221f;
border: none;
margin-top:10px;
border-radius: 10px;
transition: 0.3s;
font-size: 15px;
 &:hover{
    color: #95FFD4;
    cursor: pointer;
    box-shadow: 0px 2px 5px 0px #4e4a4a2e;


 }

 @media screen and (max-width:1249px ) {
      width: 50%;
    
   }

 @media screen and (max-width:589px ) {
      width: 40%;
    
   }
`