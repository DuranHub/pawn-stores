interface HeaderMainProps {
    children: React.ReactNode
    className: string;
    id?: string;
}

const HeaderMain = ({children, className, id} : HeaderMainProps) => {
    return(
        <h1 className={className} id={id}>
            {children}
        </h1>
    )
}

export default HeaderMain