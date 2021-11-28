import React from "react";
import styled from "styled-components";
import { mainTheme } from "../styles/theme";

interface QuizOptionProps {
  name: string;
  variant: "default" | "active" | "disabled" | "correct" | "incorrect";
}

const Option = styled.div`
  width: 150px;
  height: 150px;
	display: flex;
	align-items: center;
	justify-content: center;

	&.default {
  background-color: ${mainTheme.colors.steelBlueTransparent};
	color: ${mainTheme.colors.steelBlue}
	}

	&.active {
		background-color: ${mainTheme.colors.steelBlue};
		color: ${mainTheme.colors.macAndCheese};
	}

	&.disabled {
		background-color: ${mainTheme.colors.steelBlueTransparent};
		color: ${mainTheme.colors.steelBlueTransparent};
	}

	&.correct {
		background-color: ${mainTheme.colors.seaGreenCrayola},
		color: ${mainTheme.colors.steelBlue}
	}

	&.incorrect {
		background-color: ${mainTheme.colors.amaranth},
		color: ${mainTheme.colors.steelBlue}
	}
`;

const OptionIcon = styled.div`
  font-size: 96px;
  font-family: StateFace;
`;

export const QuizOption: React.FC<QuizOptionProps> = ({
  name,
  variant,
  children,
}) => {
  return (
    <Option className={variant}>
      <OptionIcon>{children}</OptionIcon>
    </Option>
  );
};
