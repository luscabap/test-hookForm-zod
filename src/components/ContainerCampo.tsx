import { ReactNode } from "react"

interface IContainerCampoProps {
    children: ReactNode,
    textoLabel: string,
}

export const ContainerCampo = ({ children, textoLabel }: IContainerCampoProps) => {
    return (
        <div className={`flex flex-col items-start justify-center gap-2 w-full p-2`}>
            <label >
                {textoLabel}</label>
            {children}
        </div>
    )
}