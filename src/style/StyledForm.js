import styled from "styled-components";

export const DivBase = styled.div`
  display: flex;
  justify-content: center;
  h2 {
    margin-top: 50px;
    position: absolute;

    @media screen and (max-width: 573px) {
      text-align: center;
      width: 90%;
      padding: 10px;
      margin-top: 30px;
      font-size: 20px;
    }
  }

  h3{
    @media screen and (max-width: 573px) {
      text-align: center;
      width: 90%;
      padding: 10px;
      margin-top: 30px;
      font-size: 20px;
    }
  }


  p {
    position: absolute;
    margin-top: 80px;

    @media screen and (max-width: 573px) {
     
      width: 80%;
      text-align: center;
    }
  }
`;
export const DivForm = styled.form`
  margin-top: 150px;
  margin-bottom: 150px;
  box-shadow: 0px 2px 5px 0px #4e4a4a3f;
  border-radius: 10px;
  padding: 30px;
  width: 30%;

  @media screen and (max-width: 772px) {
    width: 40%;
  }

  @media screen and (max-width: 573px) {
    width: 60%;
  }
`;
