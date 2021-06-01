import React from "react";
import {
  FormActionContainer,
  FormActionTitle,
  FormActionButton,
  FormActionWrap,
  FormActionTextWrap,
  FormActionBackButtonIcon,
  FormActionBackButtonWrap,
} from "./style";
import { useHistory } from "react-router-dom";

const FormAction = ({ children, handleSubmit, name }) => {
  const history = useHistory();
  return (
    <>
      <FormActionBackButtonWrap>
        <FormActionBackButtonIcon onClick={() => history.goBack()} />
      </FormActionBackButtonWrap>
      <FormActionWrap>
        <FormActionTextWrap>
          <FormActionTitle>Add {name}</FormActionTitle>
        </FormActionTextWrap>
        <FormActionContainer onSubmit={handleSubmit}>
          {children}
          <FormActionButton>Add</FormActionButton>
        </FormActionContainer>
      </FormActionWrap>
    </>
  );
};

export default FormAction;
