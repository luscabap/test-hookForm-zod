import { ContainerCampo } from "./components/ContainerCampo";
import { ErrorMessage } from "./components/ErrorMessage";
import { useCep } from "./hooks/useCep";

function App() {
  const { handleSubmit, aoSubmeter, register, errors } = useCep();

  const stylesInput = `bg-slate-600 p-2 w-full rounded-md
  ${errors.endereco?.nome?.message ? 'border-red-900 border-2 border-solid' : ''}`

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
              {...register("endereco.nome")}
              className={stylesInput}
            />}
          />
          {errors.endereco?.nome?.message && (
            <ErrorMessage>{errors.endereco?.nome?.message}</ErrorMessage>
          )}
          <ContainerCampo
            textoLabel="E-mail"
            children={<input
              type="text"
              placeholder="Digite o seu e-mail"
              {...register("endereco.email")}
              className={stylesInput}
            />}
          />
          {errors.endereco?.email?.message && (
            <ErrorMessage>{errors.endereco?.email?.message}</ErrorMessage>
          )}
          <ContainerCampo
            textoLabel="CEP"
            children={<input
              type="text"
              placeholder="Digite o seu CEP"
              {...register("endereco.cep")}
              className={stylesInput}
            />}
          />
          {errors.endereco?.cep?.message && (
            <ErrorMessage>{errors.endereco?.cep?.message}</ErrorMessage>
          )}
          <ContainerCampo
            textoLabel="Rua"
            children={<input
              type="text"
              placeholder="Digite o seu Rua"
              {...register("endereco.rua")}
              className={stylesInput}
            />}
          />
          {errors.endereco?.rua?.message && (
            <ErrorMessage>{errors.endereco?.rua?.message}</ErrorMessage>
          )}
          <ContainerCampo
            textoLabel="Bairro"
            children={<input
              type="text"
              placeholder="Digite o seu Bairro"
              {...register("endereco.bairro")}
              className={stylesInput}
            />}
          />
          {errors.endereco?.bairro?.message && (
            <ErrorMessage>{errors.endereco?.bairro?.message}</ErrorMessage>
          )}
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-4">
              <ContainerCampo
                textoLabel="Cidade"
                children={<input
                  type="text"
                  placeholder="Digite o seu Cidade"
                  {...register("endereco.cidade")}
                  className={stylesInput}
                />}
              />
              {errors.endereco?.cidade?.message && (
                <ErrorMessage>{errors.endereco?.cidade?.message}</ErrorMessage>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <ContainerCampo
                textoLabel="Estado"
                children={<input
                  type="text"
                  placeholder="Digite o seu Estado"
                  {...register("endereco.estado")}
                  className={stylesInput}
                />}
              />
              {errors.endereco?.estado?.message && (
                <ErrorMessage>{errors.endereco?.estado?.message}</ErrorMessage>
              )}
            </div>
          </div>
          <ContainerCampo
            textoLabel="Celular"
            children={<input
              type="text"
              placeholder="Digite o seu Celular"
              {...register("endereco.celular")}
              className={stylesInput}
            />}
          />
          {errors.endereco?.celular?.message && (
            <ErrorMessage>{errors.endereco?.celular?.message}</ErrorMessage>
          )}
          <ContainerCampo
            textoLabel="Senha"
            children={<input
              type="password"
              placeholder="Digite a sua senha"
              {...register("endereco.senhas.senha")}
              className={stylesInput}
            />}
          />
          {errors.endereco?.senhas?.senha?.message && (
            <ErrorMessage>{errors.endereco?.senhas?.senha?.message}</ErrorMessage>
          )}
          <ContainerCampo
            textoLabel="Confirmar senha"
            children={<input
              type="password"
              placeholder="Confirme a sua senha"
              {...register("endereco.senhas.senhaConfirmada")}
              className={stylesInput}
            />}
          />
          {errors.endereco?.senhas?.senhaConfirmada?.message && (
            <ErrorMessage>{errors.endereco?.senhas?.senhaConfirmada?.message}</ErrorMessage>
          )}
        </div>
        <div className="w-full">
          <button type="submit" className="bg-sky-950 p-5 w-full mt-5 transition-colors	 hover:bg-sky-700">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
