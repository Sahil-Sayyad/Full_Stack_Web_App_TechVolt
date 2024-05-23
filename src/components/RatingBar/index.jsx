import ReactStars from "react-rating-stars-component";

const RatingBar = ({
    children,
    className,
    startCount = 5,
    color = "grey",
    activeColor = "red",
    isEditable = false,
    ...restProps
}) => {
    return (
        <>
         <ReactStars
            edit = {isEditable}
            className = {className}
            count = {startCount}
            isHalf={false}
            color = {color}
            activeColor = {activeColor}
            {...restProps}
            key = {restProps.value || 1}
         />
         {children}
        </>
    );
};

export {RatingBar};




