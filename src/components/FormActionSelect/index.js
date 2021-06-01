import React from "react";
import { MessageError } from "../FormUserInput/style";
import { ContainerSelect, Select } from "./style";

const FormActionSelect = ({ children, inputRef, error, name }) => {
  return (
    <ContainerSelect>
      <Select ref={inputRef} name={name}>
        <option disabled selected value="">
          {name}
        </option>
        {children.map(({ value, content, selected }, index) => (
          <option key={index} value={value} selected={selected}>
            {content}
          </option>
        ))}
      </Select>
      {error && <MessageError>{error.message}</MessageError>}
    </ContainerSelect>
  );
};

export default FormActionSelect;
