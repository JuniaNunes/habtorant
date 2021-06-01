import { useState, useEffect } from "react";
import { ContainerInput, Input, Label, Span, MessageError } from "./style";

const FormUserInput = ({
  children,
  error,
  inputRef,
  name,
  type = "text",
  value = "",
}) => {
  const [activeInput, setActiveInput] = useState(false);

  useEffect(() => {
    if (value) {
      setActiveInput(true);
    }
  }, [value]);

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
        <Span activeInput={activeInput} error={error}>
          {children}
        </Span>
        <Input
          type={type}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          error={error}
          name={name}
        />
      </Label>
      {error && <MessageError>{error.message}</MessageError>}
    </ContainerInput>
  );
};

export default FormUserInput;
