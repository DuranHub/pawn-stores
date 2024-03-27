
interface CardImaProps {
    className: string;
    children: React.ReactNode;
}

const CardContainer = ({className, children} : CardImaProps) => {
    return(
        <div className={className}>
            {children}
        </div>
    )
}

export default CardContainer