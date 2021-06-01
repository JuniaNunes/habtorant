import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import * as yup from "yup";

import Background from "../../Images/BackgroundLoginRegister.jpg";
import GlobalContainer from "../../components/GlobalContainer";
import BackGroundImage from "../../components/BackGroundImage";
import FormUser from "../../components/FormUser";
import FormUserInput from "../../components/FormUserInput";
import { ContainerRegister } from "./style";

const Register = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    username: yup.string().required("Field Required"),
    email: yup.string().email("Invalid email").required("Field Required"),
    password: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, reset, getValues } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/users/", data)
      .then((response) => {
        reset();
        history.push("/");
      })
      .catch((e) => console.log(e.response));
  };

  const { username, email, password } = getValues();
  return (
    <div>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <ContainerRegister>
          <FormUser isRegistering handleSubmit={handleSubmit(handleForm)}>
            <FormUserInput
              name="username"
              inputRef={register}
              error={errors.username}
              value={username}
            >
              Username
            </FormUserInput>
            <FormUserInput
              name="email"
              inputRef={register}
              error={errors.email}
              value={email}
            >
              Email
            </FormUserInput>
            <FormUserInput
              name="password"
              inputRef={register}
              error={errors.password}
              value={password}
              type="password"
            >
              Password
            </FormUserInput>
          </FormUser>
        </ContainerRegister>
      </GlobalContainer>
    </div>
  );
};

export default Register;
