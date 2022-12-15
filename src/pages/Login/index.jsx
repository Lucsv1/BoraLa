import { Botao } from "../Home/components/Botao";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { DivBase, DivForm } from "../../style/StyledForm";
import { Span } from "../Address";
import {
  PlaceInput,
  PlaceLabel,
} from "../../style/components/StyledPlaceText";

export const Login = () => {
  const schema = yup.object({
    email: yup.string().required("Email obrigatorio"),
    senha: yup.string().required("Senha obrigatorio"),
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

  const [registerLogin, setRegisterlogin] = useState([]);

  const navigate = useNavigate();

  function registrar(login) {
    setRegisterlogin([...registerLogin, login]);
    navigate("/Carona");
    console.log(login);
  }

  return (
    <DivBase>
      <DivForm onSubmit={handleSubmit(registrar)}>
        <PlaceLabel>Email</PlaceLabel>
        <Span>{errors.email?.message}</Span>
        <PlaceInput {...register("email")} label="Email" type="text" />
        <PlaceLabel>Senha</PlaceLabel>
        <Span>{errors.senha?.message}</Span>
        <PlaceInput{...register("senha")} label="Senha" type="password" />
        <Botao text="Entrar "/>
      </DivForm>
      <h2>
        Se Voce no tiver conta ainda, clique aqui{" "}
        <Link to="/Register">Registrar</Link>
      </h2>
    </DivBase>
  );
};
