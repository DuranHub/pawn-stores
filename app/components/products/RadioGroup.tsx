interface RadioGroupProps {
    value: { name: string; description: string };
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
    className: string;
}

const RadioGroup = ({value, onChange, children, className} : RadioGroupProps) => {
    return(
        <select value={value} onChange={onChange} className={className}>
            {children}
        </select>
    )
}

export default RadioGroup;
