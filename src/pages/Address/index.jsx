import { Botao } from "../Home/components/Botao";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { DivBase, DivForm } from "../../style/StyledForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  PlaceInput,
  PlaceLabel,
} from "../../style/components/StyledPlaceText";
import { useForm } from "react-hook-form";
import cep from "cep-promise";
import { useState } from "react";


export const Span = styled.span`
  color: red;
`;

export const Address = () => {
  const schema = yup.object({
    cep: yup.string().required("Cep obrigatorio"),
    rua: yup.string().required("Rua obrigatorio"),
    bairro: yup.string().required("Bairro obrigatorio"),
    cidade: yup.string().required("Cidade obrigatorio"),
    estado: yup.string().required("Estado obrigatorio"),
    numero: yup.string().required("Obrigatorio a rua"),
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

  const [registerAddress, setRegisterAddress] = useState([]);

  const navigate = useNavigate()

  function registrar(loginAddress) {
    setRegisterAddress([...registerAddress, loginAddress])
    navigate('/Carona')
    console.log(loginAddress);
  }

  const buscarCep = (e) => {
    const cepSearch = e.target.value.replace(/\D/g, "");
    console.log(cepSearch);
    cep(cepSearch).then((data) => {
      console.log(data);
      setValue("rua", data.street);
      setValue("bairro", data.neighborhood);
      setValue("cidade", data.city);
      setValue("estado", data.state);
      setFocus("numero");
      setFocus("complemento")
    });
  };


  return (
    <DivBase>
      <h2>Registre seu endereço!!</h2>
      <DivForm onSubmit={handleSubmit(registrar)}>
        <PlaceLabel>Cep</PlaceLabel>
        <PlaceInput {...register("cep")} onBlur={buscarCep} />
        <Span>{errors.cep?.message}</Span>
        <PlaceLabel>Rua</PlaceLabel>
        <PlaceInput {...register("rua")} />
        <Span>{errors.rua?.message}</Span>
        <PlaceLabel>Bairro</PlaceLabel>
        <PlaceInput {...register("bairro")} />
        <Span>{errors.bairro?.message}</Span>
        <PlaceLabel>Cidade</PlaceLabel>
        <PlaceInput {...register("cidade")} />
        <Span>{errors.cidade?.message}</Span>
        <PlaceLabel>Estado</PlaceLabel>
        <PlaceInput {...register("estado")} />
        <Span>{errors.estado?.message}</Span>
        <PlaceLabel>Numero</PlaceLabel>
        <PlaceInput {...register("numero")} />
        <Span>{errors.numero?.message}</Span>
        <PlaceLabel>Complemeto</PlaceLabel>
        <PlaceInput {...register("complemnto")}/>
        <Botao type="submit" text="Cadastrar" />
      </DivForm>
    </DivBase>
  );
};
