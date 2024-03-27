interface ButtonLinkProps {
    to: string;
    className: string;
    children: React.ReactNode;
}

const ButtonLink = ({to, className, children} : ButtonLinkProps) => {
    return(
        <a href={to} className={className}>
            {children}
        </a>
    )
}

export default ButtonLink