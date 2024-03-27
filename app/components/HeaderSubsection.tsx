interface HeaderSubsectionProps {
    children: React.ReactNode
    className: string;
}

const HeaderSubsection = ({children, className} : HeaderSubsectionProps) => {
    return(
        <h3 className={className}>
            {children}
        </h3>
    )
}

export default HeaderSubsection