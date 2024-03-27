interface CardImageProps {
    imgUrl: string;
    alternativeText: string;
    className: string;
}

const Img = ({imgUrl, alternativeText, className} : CardImageProps) => {
    return(
        <img 
            src={imgUrl}
            alt={alternativeText}
            className={className}
        />
        
    )
}

export default Img