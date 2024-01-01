import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[3px]" };
const variants = {
  fill: {
    yellow_800: "bg-yellow-800 text-white-A700",
    gray_100: "bg-gray-100 text-black-900",
  },
};
const sizes = { xs: "p-1.5", sm: "p-3", md: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "yellow_800",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["yellow_800", "gray_100"]),
};

export { Button };
