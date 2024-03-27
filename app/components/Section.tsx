interface SectionProps {
    children: React.ReactNode;
    ariaLabelledby: string;
    className?: string;
}

const Section = ({children, ariaLabelledby, className} : SectionProps) => {
    return(
        <section aria-labelledby={ariaLabelledby} className={className}>
            {children}
        </section>
    )
}

export default Section