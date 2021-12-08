import React, { useState } from "react";
import { QuestionOption } from "../question/Question";
import {
  OptionMini,
  OptionIconMini,
  OptionsWrapper,
} from "./RandowQuizOptionsStyled";

const randomOptions: QuestionOption[] = [
  {
    code: "OR",
    char: "k",
    name: "Oregon",
    correct: false,
    hinted: false,
  },
  {
    code: "TX",
    char: "q",
    name: "Texas",
    correct: false,
    hinted: false,
  },
  {
    code: "NY",
    char: "h",
    name: "New York",
    correct: true,
    hinted: false,
  },
  {
    code: "CA",
    char: "E",
    name: "California",
    correct: false,
    hinted: false,
  },
];

export const RandomQuizOptions: React.FC = () => {
  const [options, setOptions] = useState<QuestionOption[]>(randomOptions);

  return (
    <OptionsWrapper>
      {options.map((opt: QuestionOption) => (
        <OptionMini className="default">
          <OptionIconMini>{opt.char}</OptionIconMini>
        </OptionMini>
      ))}
    </OptionsWrapper>
  );
};
