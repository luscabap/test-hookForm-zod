import { z } from "zod";

export const schemaForm = z.object({
  endereco: z.object({
    nome: z.string().min(1, 'O Campo Nome obrigatório'),
    email: z.string().min(1, 'O campo E-mail é obrigatório').email('Digite um e-mail válido'),
    cep: z.string().min(1, 'O campo CEP é obrigatório'),
    rua: z.string().min(1, 'O campo Rua é obrigatório'),
    bairro: z.string().min(1, 'O campo Bairro é obrigatório'),
    cidade: z.string().min(1, 'O campo Cidade é obrigatório'),
    estado: z.string().min(1, 'O campo Estado é obrigatório'),
    celular: z.string().min(1, 'O campo Celular é obrigatório'),
    senhas: z.object({
      senha: z.string().min(1, 'O campo Senha é obrigatório'),
      senhaConfirmada: z.string().min(1, 'O campo Confirmar Senha é obrigatório'),
    }).refine(data => data.senha === data.senhaConfirmada, {
      message: "Por favor, verifique novamente e digite as senhas igualmente",
      path: ['senhaConfirmada']
    })
  })
})