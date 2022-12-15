import { Botao } from "../Home/components/Botao";
import { DivBase, DivForm } from "../../style/StyledForm";
import { PlaceInput, PlaceLabel } from "../../style/components/StyledPlaceText";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Span } from "../Address";
import { DivDarCarona, CheckBox, DivCheck, BotaoIniciar, LabelBox } from "../../style/StyledDarCarona";


export const RegisterAuto = () => {

  const schema = yup.object({
    placa: yup.string().max(7).required("Placa obrigatorio"),
    renavam: yup.string().required("Renavam obrigatorio"),
    cnh: yup.number().required("CNH obrigatorio").transform((value) => (isNaN(value) ? undefined : value)).nullable(),
    marca: yup.string().required("Marca obrigatorio"),
    modelo: yup.string().required("Modelo obrigatorio"),
    ano: yup.number("tem ser numero").transform((value) => (isNaN(value) ? undefined : value)).nullable()
      .max(2023, "não existe veiculo depois de 2023")
      .required("Ano do veiculo obrigatorio"),
    chassi: yup.string().required("Criar Senha Obrigatorio"),
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

  const [registerAuto, setRegisterAuto] = useState([]);

  const navigate = useNavigate();

  function registrar(loginAuto) {
    setRegisterAuto([...registerAuto, loginAuto]);
    navigate("/DarCarona");
    console.log(loginAuto);
  }

  

  return (
    <DivBase>
      <h2>Registre seu veiculo!!</h2>
      <p>
        É fundamental que tenhamos os dados do seu veiculo, por conta de
        segurança.
      </p>
      <DivForm  onSubmit={handleSubmit(registrar)}>
        <DivCheck>
          <LabelBox htmlFor="">Qual a categoria do veiculo ?</LabelBox>
          <CheckBox {...register("automovel")} type="radio" name="veiculo" value='carro' /><span>Carro</span>
          <CheckBox {...register("automovel")} type="radio" name="veiculo" value='moto' /><span>Moto</span>
        </DivCheck>
        <PlaceLabel>Placa</PlaceLabel>
        <Span>{errors.placa?.message}</Span>
        <PlaceInput {...register("placa")} />
        <PlaceLabel>CNH</PlaceLabel>
        <Span>{errors.cnh?.message}</Span>
        <PlaceInput {...register("cnh")} />
        <PlaceLabel>Renavam</PlaceLabel>
        <Span>{errors.renavam?.message}</Span>
        <PlaceInput {...register("renavam")} />
        <PlaceLabel>Marca</PlaceLabel>
        <Span>{errors.marca?.message}</Span>
        <PlaceInput {...register("marca")} />
        <PlaceLabel>Modelo</PlaceLabel>
        <Span>{errors.modelo?.message}</Span>
        <PlaceInput {...register("modelo")} />
        <PlaceLabel>Ano</PlaceLabel>
        <Span>{errors.ano?.message}</Span>
        <PlaceInput {...register("ano")}/>
        <PlaceLabel>Chassi</PlaceLabel>
        <Span>{errors.chassi?.message}</Span>
        <PlaceInput {...register("chassi")} />
        <Botao text="Continuar" />
      </DivForm>
    </DivBase>
  );
};
