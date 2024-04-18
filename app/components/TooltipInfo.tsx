import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

type Props = {
    text?: string;
    infoTexto: string;
};

const TooltipInfo = ({ text, infoTexto }: Props) => {
    return (
        <>
            {text && <span>{text}</span>}
            <QuestionMarkCircleIcon 
                title={infoTexto}
                className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
            />
            <span 
                className="invisible group-hover:visible opacity-0
                group-hover:opacity-100 transition bg-indigo-800
                text-white p-1 rounded-md"
            >
                {infoTexto}
            </span>
        </>
    )
}

export default TooltipInfo