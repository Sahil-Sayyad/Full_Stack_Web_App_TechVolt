import React from "react";
import PropTypes from "prop-types"

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[25px]",
};

const variants = {

    outline: {
        black_900_02: "border-black-900_02 border-b border-solid text-gray-700",
        blue_gray_100_01: "border-blue_gray-100_01 border border-solid text-gray-700", 
    },
    fill: {
        white_A700: "bg-white-A700 text-gray-700",
        gray_300_01: "bg-gray-300_01 text-gray-700",
    },
};


const sizes = {
    xs: "h-[39px] pr-[35px] text-lg",
    md: "h-[51px] px-6 text-lg",
    lg: "h-[60px] px-[15px] text-base",
    sm: "h-[50px] px-3.5 text-sm",
};

const Input = React.forwardRef(
    (
     {
        
         className = "",
         name="",
         placeholder="",
         type="text",
         children,
         label ="",
         prefix,
         suffix,
         onChange ,
         shape,
         variant = "fill", 
         size = "sm",
         color = "white_A700",
         ...restProps
        },
        ref,
    ) => {
        const handleChange = (e) => {
            if(onChange) onChange(e?.target?.value);
        } ;

       
        return (
            <>
            <label
                className={`${className} flex items-center justify-start cursor-text border-solid ${(shape && shapes[shape]) || ""} ${(variants[variant]?.[color]) || variants[variant] || ""}${(size && sizes[size]) || ""}`}
            >
            {!!label && label}
            {!!prefix && prefix}
            <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps}/>
            {!!suffix && suffix}  
            </label>
            </>
        );
    },
);




Input.propTypes = {
    className: PropTypes.string, 
    name:PropTypes.string,
    placeholder:PropTypes.string,
    type:PropTypes.string,
    label:PropTypes.string,
    prefix:PropTypes.node,
    suffix:PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf(["sm", "md", "xs", "lg"]),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf([
        "black_900_02", 
        "gray_300_01",
        "white_A700",
        "blue_gray_100_01",
    ]),
};

export { Input };