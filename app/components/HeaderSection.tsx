interface HeaderSectionProps {
    children: React.ReactNode
    className: string;
    id?: string;
}

const HeaderSection = ({children, className, id} : HeaderSectionProps) => {
    return(
        <h2 className={className} id={id}>
            {children}
        </h2>
    )
}

export default HeaderSection