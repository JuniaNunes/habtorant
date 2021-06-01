import React from "react";
import { ContainerInput, Input, Label, Span } from "./style";

const FormActionInput = ({ children }) => {
  const [activeInput, setActiveInput] = React.useState(false);

  const handleChange = ({ target }) => {
    if (target.value !== "") {
      setActiveInput(true);
    } else {
      setActiveInput(false);
    }
  };

  const handleBlur = ({ target }) => {
    if (target.value === "") {
      setActiveInput(false);
    }
  };

  const handleFocus = () => {
    setActiveInput(true);
  };
  return (
    <ContainerInput>
      <Label>
        <Span activeInput={activeInput}>{children}</Span>
        <Input
          type="text"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </Label>
    </ContainerInput>
  );
};

export default FormActionInput;
