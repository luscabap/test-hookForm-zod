import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { schemaForm } from "../schemas/schemaForm";
import { FormProps } from "../types/typeForm";
import { ApiCepProps } from "../types/typeApiCEP";

export const useCep = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    reset
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schemaForm),
    defaultValues: {
        endereco: {
            bairro: "",
            celular: "",
            cep: "",
            cidade: "",
            email: "",
            estado: "",
            nome: "",
            rua: "",
            senhas: {
              senha: "",
              senhaConfirmada: ""
            }
        }
    }
  });

  const aoSubmeter = (data: FormProps) => {
    console.log(data);
    reset();
  }

  const handleValues = useCallback((data: ApiCepProps) => {
    setValue('endereco.bairro', data.bairro)
    setValue('endereco.cidade', data.localidade)
    setValue('endereco.estado', data.uf)
    setValue('endereco.rua', data.logradouro)
  }, [setValue])

  const buscaCep = useCallback(async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      handleValues(data)
    } catch(error) {
      console.error(error)
    }
  }, [handleValues]);
 
  const cepDigitado = watch("endereco.cep");

  useEffect(() => {
    if (cepDigitado.length !== 8) return;
    buscaCep(cepDigitado)
  }, [buscaCep, cepDigitado])

  return {
    register,
    errors,
    handleSubmit,
    aoSubmeter,
  };
};
