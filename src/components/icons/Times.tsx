import React from "react";
import { mainTheme } from "../../styles/theme";

interface TimesProps {
  variant: "blue" | "orange";
}

const strokeColors = {
  blue: mainTheme.colors.steelBlue,
  orange: mainTheme.colors.macAndCheese,
};

export const Times: React.FC<TimesProps> = ({ variant }) => {
  const stroke = strokeColors[variant];

  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5L30 30M30 5L5 30"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
