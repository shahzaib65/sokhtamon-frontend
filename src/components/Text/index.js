import React from "react";

const sizeClasses = {
  txtRobotoRomanMedium12: "font-medium font-roboto",
  txtRobotoRomanSemiBold24Black900: "font-roboto font-semibold",
  txtRobotoBold20Black900: "font-bold font-roboto",
  txtRobotoRomanSemiBold18: "font-roboto font-semibold",
  txtRobotoRomanSemiBold16: "font-roboto font-semibold",
  txtRobotoBold18: "font-bold font-roboto",
  txtRobotoRomanBold50: "font-bold font-roboto",
  txtRobotoRegular14Bluegray30001: "font-normal font-roboto",
  txtRobotoRegular14Bluegray300: "font-normal font-roboto",
  txtRobotoRomanRegular14Bluegray600: "font-normal font-roboto",
  txtRobotoRomanMedium14Bluegray30001: "font-medium font-roboto",
  txtRobotoRomanMedium14Bluegray30002: "font-medium font-roboto",
  txtRobotoRomanSemiBold24: "font-roboto font-semibold",
  txtRobotoRomanMedium16Gray90002: "font-medium font-roboto",
  txtRobotoRomanSemiBold44: "font-roboto font-semibold",
  txtRobotoBold20: "font-bold font-roboto",
  txtRobotoRomanSemiBold20: "font-roboto font-semibold",
  txtRobotoRomanBold44: "font-bold font-roboto",
  txtRobotoRomanMedium14Gray90003: "font-medium font-roboto",
  txtRobotoRomanMedium16Bluegray30002: "font-medium font-roboto",
  txtRobotoRegular12Bluegray300: "font-normal font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtRobotoRomanMedium16Black900: "font-medium font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoRomanRegular18: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoRomanRegular19: "font-normal font-roboto",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoRomanSemiBold14: "font-roboto font-semibold",
  txtRobotoBold16: "font-bold font-roboto",
  txtRobotoRomanMedium18: "font-medium font-roboto",
  txtRobotoRomanRegular14Gray90004: "font-normal font-roboto",
  txtRobotoRomanBold28: "font-bold font-roboto",
  txtRobotoRomanRegular12: "font-normal font-roboto",
  txtRobotoLight10: "font-light font-roboto",
  txtRobotoRomanMedium16: "font-medium font-roboto",
  txtRobotoRomanBold26: "font-bold font-roboto",
  txtRobotoRomanRegular14: "font-normal font-roboto",
  txtRobotoRomanMedium14Black900: "font-medium font-roboto",
  txtRobotoBold32: "font-bold font-roboto",
  txtRobotoRomanMedium14: "font-medium font-roboto",
  txtRobotoMedium16: "font-medium font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
