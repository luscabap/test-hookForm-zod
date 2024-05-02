import { useCallback } from "react"

export const useCep = () => {
    const buscaCep = useCallback(async (cep: string) => {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json();
        console.log(data)
        return data;
    }, [])


    return {
        buscaCep
    }
}