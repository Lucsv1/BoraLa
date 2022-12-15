import { PlaceText } from "../Home/components/PlaceText";
import {
  DivDarCarona,
  CheckBox,
  LabelBox,
  DivCheck,
  BotaoIniciar,
} from "../../style/StyledDarCarona";
import { DivBase, DivForm } from "../../style/StyledForm";
import { PlaceInput, PlaceLabel } from "../../style/components/StyledPlaceText";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Span } from "../Address";

export const DarCarona = () => {
  const schema = yup.object({
    saindo: yup.string().required("Coloque o ponto de Saida"),
    indo: yup.string().required("Coloque o ponto de chegada"),
    preco: yup.string().required("Determina o preço de sua viagem"),
    horario: yup.string().required("Determine o horario de sua viagem"),
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

  const [registerDarCarona, setRegisterDarCarona] = useState([]);

  const navigate = useNavigate();

  function registrar(loginDarCarona) {
    setRegisterDarCarona([...registerDarCarona, loginDarCarona]);
    console.log(loginDarCarona);
  }

  return (
    <DivBase>
      <h2>Comece a dar caronas!!</h2>
      <DivForm onSubmit={handleSubmit(registrar)}>
        <PlaceLabel>Saindo do Bairro...</PlaceLabel>
        <Span>{errors.saindo?.message}</Span>
        <PlaceInput {...register("saindo")} />
        <PlaceLabel>Indo para o Bairro...</PlaceLabel>
        <Span>{errors.indo?.message}</Span>
        <PlaceInput {...register("indo")} />
        <DivCheck>
          <LabelBox>Qual frequencia que voce realiza as viagens</LabelBox>
          <CheckBox
            {...register("diariamente")}
            type="radio"
            name="freq"
            value="diariamente"
          />
          <span>Diariamente </span>
          <CheckBox
            {...register("semanalmete")}
            type="radio"
            name="freq"
            value="semanalmete"
          />
          <span>Semanalmente</span>
          <CheckBox
            {...register("mensalmente")}
            type="radio"
            name="freq"
            value="mensalmente"
          />
          <span>Mensalmente </span>
        </DivCheck>
        <PlaceLabel>Determine um Preço</PlaceLabel>
        <Span>{errors.preco?.message}</Span>
        <PlaceInput {...register("preco")} />
        <PlaceLabel>Horario de incio</PlaceLabel>
        <Span>{errors.horario?.message}</Span>
        <PlaceInput {...register("horario")} type="time" />
        <PlaceLabel>Data da viagem</PlaceLabel>
        <Span>{errors.data?.message}</Span>
        <PlaceInput {...register("data")} type="date" />
        <PlaceLabel>Qntd de passageiros</PlaceLabel>
        <Span>{errors.passageiros?.message}</Span>
        <PlaceInput {...register("passageiros")} type="number" />
        <BotaoIniciar>Iniciar</BotaoIniciar>
      </DivForm>
    </DivBase>
  );
};
