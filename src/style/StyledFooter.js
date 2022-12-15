import styled from "styled-components";

export const DivBaseFooter = styled.div`
display: flex;
justify-content:center;
height: 100px;
box-shadow: 2px 2px 5px 2px #08080830;
background-color: #00221f;

@media screen and (max-width:2001px) {
    margin-top: 6%;
    border: solid;
  }

`
export const DivContentFooter = styled.div`
text-align: center;

width: 50%;
ul{
    display: flex;
    justify-content: space-around;
    padding: 10px;
    
}

ul li{
    color: white;
    font-size: 25px;
    list-style-type: none;
    padding: 10px;
}


p{
    color: white;
}

`
