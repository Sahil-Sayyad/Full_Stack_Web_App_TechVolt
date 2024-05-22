import React from "react";
import PropTypes from "prop-types"

const shapes = {
    circle: "rounded- [50%]",
    square: "rounded-[0px]",
    round: "rounded-[28px]",
};

const variants = {

    fill: {
        black_900_02: "bg-black-900_02",
        deep_orange_A700: "bg-deep_orange-A700 text-white-A700",
        gray_300_04: "bg-gray-300_04 text-black-900_02",
        white_A700: "bg-white-A700 text-black-900_02",
        gray_200_01: "bg-gray-200_01",
    },
    outline: {
        blue_gray_100_01: "border-blue_gray-100_01 border border-solid text-blue_gray-900", 
        black_900_02: "border-black-900_02 border border-solid text-black-900_02",
        deep_orange_A700: "border-deep_orange-A700 border-b-2 border-solid text-black-900_02",
    },
};


const sizes = {
    md: "h-[38px] px-[9px]",
    sm: "h-[26px] px-3 text-xs",
    "4xl": "h-[54px] px-[11px] text-xl",
    xl: "h-[48px] px-0.5",
    "2xl": "h-[52px] px-[13px]",
    xs: "h-[24px] px-px",
    lg: "h-[46px] px-[31px] text-base",
    "3xl": "h-[52px] px-[35px] text-base",
    "5xl": "h-[56px] px-[35px] text-base",
};

const Button = ({

    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "5xl",
    color = "white_A700",
    ...restProps

}) => { 
    return (

        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants [variant]?.[color]) || ""}`}
            {...restProps}
        >
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
        </button>
);
};


Button.propTypes = {
    className: PropTypes.string, 
    children: PropTypes.node, 
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["circle", "square", "round"]),
    size: PropTypes.oneOf(["md", "sm", "4xl", "xl", "2xl", "xs", "lg", "3xl", "5xl"]),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf([
        "black_900_02", 
        "deep_orange_A700",
        "gray_300_04",
        "white_A700",
        "gray_200_01",
        "blue_gray_100_01",
    ]),
};

export { Button };