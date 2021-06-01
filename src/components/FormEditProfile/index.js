import {
  FormEditContainer,
  FormEditTitle,
  FormEditButton,
  FormEditWrap,
  FormEditTextWrap,
  FormEditBackButtonIcon,
  FormEditBackButtonWrap,
} from "./style";
import { useHistory } from "react-router-dom";

const FormEdit = ({ children, handleSubmit, name }) => {
  const history = useHistory();
  return (
    <>
      <FormEditBackButtonWrap>
        <FormEditBackButtonIcon onClick={() => history.goBack()} />
      </FormEditBackButtonWrap>
      <FormEditWrap>
        <FormEditTextWrap>
          <FormEditTitle>Edit {name}</FormEditTitle>
        </FormEditTextWrap>

        <FormEditContainer onSubmit={handleSubmit}>
          {children}
          <FormEditButton>Save edit</FormEditButton>
        </FormEditContainer>
      </FormEditWrap>
    </>
  );
};

export default FormEdit;
