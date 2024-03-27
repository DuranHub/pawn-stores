interface LabelProps {
    className: string;
    children: React.ReactNode;
}

const Label = ({className, children} : LabelProps) => {
    return(
        <label className={className}>
            {children}
        </label>
    )
}

export default Label