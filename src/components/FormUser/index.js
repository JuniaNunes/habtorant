import {
  FormTitle,
  Square,
  SquareInverse,
  Form,
  ButtonSubmit,
  ButtonIcon,
  LabelSignInRegiter,
  LinkSignInRegiter,
  FormButtonsWrap,
  ContainerLink,
} from "./style";
import { COLORS } from "../../style";
import { useHistory } from "react-router-dom";

const FormUser = ({ children, isRegistering, handleSubmit }) => {
  const history = useHistory();

  const handleClick = (isRegistering) => {
    if (isRegistering) {
      history.push("/");
    } else {
      history.push("/register");
    }
  };

  return (
    <div>
      <div>
        <Square color={COLORS.highlight} />
        <SquareInverse color={COLORS.gray} />
        <FormTitle>WE ARE HABITORANT</FormTitle>
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <div>{children}</div>

          <FormButtonsWrap>
            <ButtonSubmit>
              <ButtonIcon />
            </ButtonSubmit>
            <ContainerLink>
              <LabelSignInRegiter>
                {isRegistering ? <p>Register</p> : <p>Sign in</p>}
              </LabelSignInRegiter>
              <LinkSignInRegiter onClick={() => handleClick(isRegistering)}>
                {isRegistering ? <p>or Sign in</p> : <p>or Register</p>}
              </LinkSignInRegiter>
            </ContainerLink>
          </FormButtonsWrap>
        </Form>
      </div>
    </div>
  );
};
export default FormUser;
