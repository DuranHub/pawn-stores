interface HeaderDetailProps {
    children: React.ReactNode
    className: string;
    id?: string;
}

const HeaderDetail = ({children, className, id} : HeaderDetailProps) => {
    return(
        <h4 className={className} id={id}>
            {children}
        </h4>
    )
}

export default HeaderDetail