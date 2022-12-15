import { DivBase } from "../../style/StyledCarona";
import {  DivForm } from "../../style/StyledForm";
import { PlaceInput, PlaceLabel } from "../../style/components/StyledPlaceText";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Span } from "../Address"
import { Link } from "react-router-dom";
import { BotaoLocalizar } from "../../style/StyledCarona";

export const Carona = () => {


  const schema = yup.object({
    saindo: yup.string().required("Coloque o ponto de Saida"),
    indo: yup.string().required("Coloque o ponto de chegada"),
    data: yup.string().required("Determine a data da sua viagem"),
    passageiros: yup.string().required("Determine a quantidade de passageiros"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [registerCarona, setRegisterCarona] = useState([]);

  const navigate = useNavigate();

  function registrar(loginCarona) {
    setRegisterCarona([...registerCarona, loginCarona]);
    console.log(loginCarona);
  }

  return (
    <DivBase>
      <h2>Busque Caronas!!</h2>
      <h3>
        Se pretende dar uma carona clique em{" "}
        <Link to="/RegistrarAuto">Dar Carona</Link>
      </h3>
      <DivForm onSubmit={handleSubmit(registrar)}>
        <PlaceLabel>Saindo do Bairro...</PlaceLabel>
        <Span>{errors.saindo?.message}</Span>
        <PlaceInput {...register("saindo")} />
        <PlaceLabel>indo para o Bairro...</PlaceLabel>
        <Span>{errors.saindo?.message}</Span>
        <PlaceInput {...register("indo")} />
        <PlaceLabel>Data da viagem</PlaceLabel>
        <Span>{errors.saindo?.message}</Span>
        <PlaceInput {...register("data")} type="date" />
        <PlaceLabel>Quantidade de pessoas</PlaceLabel>
        <Span>{errors.saindo?.message}</Span>
        <PlaceInput {...register("passageiros")} type="number" />
        <BotaoLocalizar>Localizar</BotaoLocalizar>
      </DivForm>
    </DivBase>
  );
};
