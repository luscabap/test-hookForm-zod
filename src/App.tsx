import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import { z } from "zod";
import { ErrorMessage } from "./components/ErrorMessage";

const schemaForm = z.object({
  nome: z.string().min(1, 'O Campo nome obrigatório'),
  email: z.string().min(1, 'O campo email é obrigatório').email('Digite um e-mail válido'),
  cep: z.string().min(1, 'O campo CEP é obrigatório'),
  celular: z.string().min(1, 'O campo celular é obrigatório')
})

type FormProps = z.infer<typeof schemaForm>

function App() {
  const { register, formState: { errors }, handleSubmit } = useForm<FormProps>({
    resolver: zodResolver(schemaForm)
  });

  function aoSubmeter (data: FormProps) {
    console.log(data)
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="mb-5">Form WebSite</h1>
        <form className="min-w-80 " onSubmit={handleSubmit(aoSubmeter)}>
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col items-start justify-center gap-2 w-full">
              <label>Nome</label>
              <input 
                type="text" 
                placeholder="Digite o seu nome"
                {...register("nome")}
                className="bg-slate-600 p-2 w-full"
              />
              {errors.nome?.message && (
                <ErrorMessage>{errors.nome?.message}</ErrorMessage>
              )}
            </div>
            <div className="flex flex-col items-start justify-center gap-2 w-full">
              <label>E-mail</label>
              <input 
                type="text" 
                placeholder="Digite o seu e-mail"
                {...register("email")}
                className="bg-slate-600 p-2 w-full"
              />
              {errors.email?.message && (
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              )}
            </div>
            <div className="flex flex-col items-start justify-center gap-2 w-full">
              <label>CEP</label>
              <input 
                type="text" 
                placeholder="Digite o seu CEP"
                {...register("cep")}
                className="bg-slate-600 p-2 w-full"
              />
              {errors.cep?.message && (
                <ErrorMessage>{errors.cep?.message}</ErrorMessage>
              )}
            </div>
            <div className="flex flex-col items-start justify-center gap-2 w-full">
              <label>Celular</label>
              <input 
                type="text" 
                placeholder="Digite o seu número de celular"
                {...register("celular")}
                className="bg-slate-600 p-2 w-full"
              />
              {errors.celular?.message && (
                <ErrorMessage>{errors.celular?.message}</ErrorMessage>
              )}
            </div>    
          </div>

          <div className="w-full">
            <button type="submit" className="bg-sky-950 p-5 w-full mt-5 transition-colors	 hover:bg-sky-700">Enviar</button>
          </div>
        </form>
    </div>
  )
}

export default App
