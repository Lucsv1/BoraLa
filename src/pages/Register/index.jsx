import { DivBase, DivForm } from "../../style/StyledForm";
import { useNavigate } from "react-router-dom";
import { PlaceInput, PlaceLabel } from "../../style/components/StyledPlaceText";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Botao } from "../Home/components/Botao";
import { useState } from "react";
import { Span } from "../Address";

export const Register = () => {

  
  const schema = yup.object({
    nome: yup.string().required("Nome obrigatorio"),
    cpf: yup.string().required("CPF obrigatorio"),
    idade: yup.number().transform((value) => (isNaN(value) ? undefined : value)).nullable().required("idade obrigatorio").min(18, 'Voce tem que ser maior de idade'),
    email: yup.string().email().required("Email obrigatorio"),
    cell: yup.number().transform((value) => (isNaN(value) ? undefined : value)).nullable().required("Numero Celular obrigatorio"),
    senha: yup.string().required("Criar Senha Obrigatorio"),
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

  const [registro, setRegistro] = useState([]);

  const navigate = useNavigate();

  async function registrar(registroUser) {
    setRegistro([...registro, registroUser]);
    console.log(registroUser);
      let data = {
        id_usu: Math.floor(Math.random() * 150),
        nome_usu: registroUser.nome,
        email: registroUser.email,
        cpf_usu: registroUser.cpf,
        telefone_usu: parseInt(registroUser.cell),
        senha: registroUser.senha,
        comentario: "Comentario Default"
      }
    
      await fetch('http://localhost:8080/GlobalSolution/rest/usuario', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
        })
    
        navigate("/Address");
  }

  
  return (
    <DivBase>
      <h2>Faça seu cadastro agora!!</h2>
      <DivForm onSubmit={handleSubmit(registrar)}>
        <PlaceLabel>Nome Completo</PlaceLabel>
        <Span>{errors.nome?.message}</Span>
        <PlaceInput {...register("nome")} />
        <PlaceLabel>CPF</PlaceLabel>
        <Span>{errors.cpf?.message}</Span>
        <PlaceInput {...register("cpf")} />
        <PlaceLabel>Idade</PlaceLabel>
        <Span>{errors.idade?.message}</Span>
        <PlaceInput {...register("idade")} />
        <PlaceLabel>Email</PlaceLabel>
        <Span>{errors.email?.message}</Span>
        <PlaceInput {...register("email")} type="email" />
        <PlaceLabel>Numero Celular</PlaceLabel>
        <Span>{errors.cell?.message}</Span>
        <PlaceInput {...register("cell")} />
        <PlaceLabel>Criar Senha</PlaceLabel>
        <Span>{errors.senha?.message}</Span>
        <PlaceInput {...register("senha")} type="password" />
        <Botao text="Continuar" />
      </DivForm>
    </DivBase>
  );
};
