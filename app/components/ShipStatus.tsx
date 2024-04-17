import { CheckIcon } from "@heroicons/react/20/solid";

type Props = {
    statusText: string;
}

const ShipStatus = ({ statusText } : Props) => {
    return (
        <>
            <CheckIcon
                className="h-5 w-5 flex-shrink-0 text-green-500"
                aria-hidden="true"
            />
            <p className="ml-2 text-sm text-gray-500">
                {statusText}
            </p>
        </>

    )
}

export default ShipStatus