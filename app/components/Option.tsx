interface OptionProps {
    key: string;
    value: any;
    className: (props: { active: boolean }) => string | string;
}

const Option = () => {
    return(
        <option >

        </option>
    )
}

export default Option