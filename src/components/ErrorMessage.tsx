interface IErrorMessageProps {
    children: string | React.ReactElement	
}

export const ErrorMessage = ({ children }: IErrorMessageProps) => {
    return (
        <span className="font-bold text-red-600">
            {children}
        </span>
    )
}