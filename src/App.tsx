import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ContainerCampo } from "./components/ContainerCampo";
import { ErrorMessage } from "./components/ErrorMessage";
import { useCep } from "./hooks/useCep";

const schemaForm = z.object({
  nome: z.string().min(1, 'O Campo Nome obrigatório'),
  email: z.string().min(1, 'O campo E-mail é obrigatório').email('Digite um e-mail válido'),
  cep: z.string().min(1, 'O campo CEP é obrigatório'),
  rua: z.string().min(1, 'O campo Rua é obrigatório'),
  bairro: z.string().min(1, 'O campo Bairro é obrigatório'),
  cidade: z.string().min(1, 'O campo Cidade é obrigatório'),
  estado: z.string().min(1, 'O campo Estado é obrigatório'),
  celular: z.string().min(1, 'O campo Celular é obrigatório')
})

type FormProps = z.infer<typeof schemaForm>

function App() {
  const { register, formState: { errors }, handleSubmit, watch } = useForm<FormProps>({
    resolver: zodResolver(schemaForm)
  });

  function aoSubmeter(data: FormProps) {
    console.log(data)
  }

  const cepDigitado = watch('cep');
  const { buscaCep } = useCep();
  
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-5 mt-5">Form WebSite</h1>
      <form className="min-w-96" onSubmit={handleSubmit(aoSubmeter)}>
        <div className="flex flex-col gap-5 items-start">
          <ContainerCampo
            textoLabel="Nome"
            children={<input
              type="text"
              placeholder="Digite o seu nome"
              {...register("nome")}
              className="bg-slate-600 p-2 w-full"
            />}
          />
          {errors.nome?.message && (
            <ErrorMessage>{errors.nome?.message}</ErrorMessage>
          )}
          <ContainerCampo
            textoLabel="E-mail"
            children={<input
              type="text"
              placeholder="Digite o seu e-mail"
              {...register("email")}
              className="bg-slate-600 p-2 w-full"
            />}
          />
          {errors.email?.message && (
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          )}
          <ContainerCampo
            textoLabel="CEP"
            children={<input
              type="text"
              placeholder="Digite o seu CEP"
              {...register("cep")}
              className="bg-slate-600 p-2 w-full"
            />}
          />
          <button className="bg-sky-900 p-5" onClick={() => buscaCep(cepDigitado)}>Pesquisar</button>
          {errors.cep?.message && (
            <ErrorMessage>{errors.cep?.message}</ErrorMessage>
          )}
          <ContainerCampo
            textoLabel="Rua"
            children={<input
              type="text"
              placeholder="Digite o nome da rua"
              {...register("rua")}
              className="bg-slate-600 p-2 w-full"
            />}
          />
          {errors.rua?.message && (
            <ErrorMessage>{errors.rua?.message}</ErrorMessage>
          )}
          <ContainerCampo
            textoLabel="Bairro"
            children={<input
              type="text"
              placeholder="Digite o seu bairro"
              {...register("bairro")}
              className="bg-slate-600 p-2 w-full"
            />}
          />
          {errors.bairro?.message && (
            <ErrorMessage>{errors.bairro?.message}</ErrorMessage>
          )}
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-4">
              <ContainerCampo
                textoLabel="Cidade"
                children={<input
                  type="text"
                  placeholder="Digite a sua cidade"
                  {...register("cidade")}
                  className="bg-slate-600 p-2 w-full"
                />}
              />
              {errors.cidade?.message && (
                <ErrorMessage>{errors.cidade?.message}</ErrorMessage>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <ContainerCampo
                textoLabel="Estado"
                children={<input
                  type="text"
                  placeholder="Digite o seu estado"
                  {...register("estado")}
                  className="bg-slate-600 p-2 w-full"
                />}
              />
              {errors.estado?.message && (
                <ErrorMessage>{errors.estado?.message}</ErrorMessage>
              )}
            </div>
          </div>
          <ContainerCampo
            textoLabel="Celular"
            children={<input
              type="text"
              placeholder="Digite o seu número de celular"
              {...register("celular")}
              className="bg-slate-600 p-2 w-full"
            />}
          />
          {errors.celular?.message && (
            <ErrorMessage>{errors.celular?.message}</ErrorMessage>
          )}
        </div>

        <div className="w-full">
          <button type="submit" className="bg-sky-950 p-5 w-full mt-5 transition-colors	 hover:bg-sky-700">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default App
