import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import Background from "../../Images/BackgroundLoginRegister.jpg";
import GlobalContainer from "../../components/GlobalContainer";
import BackGroundImage from "../../components/BackGroundImage";
import FormUser from "../../components/FormUser";
import FormUserInput from "../../components/FormUserInput";
import { ContainerLogin } from "./style";
import { toast } from "react-toastify";
import Notification from "../../components/Notification";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Field Required"),
    password: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, reset, getValues } = useForm({
    resolver: yupResolver(schema),
  });

  const notifyError = (error) =>
    toast(error, {
      autoClose: 2000,
      hideProgressBar: true,
      position: "top-center",
    });

  const { username, password } = getValues();

  const handleForm = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const { user_id } = jwt_decode(response.data.access);
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.access));
        localStorage.setItem("user_id", JSON.stringify(user_id));
        reset();
        history.push("/home");
      })
      .catch((e) => {
        notifyError(e.response.data.detail);
      });
  };
  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <ContainerLogin>
        <FormUser isRegistering={false} handleSubmit={handleSubmit(handleForm)}>
          <FormUserInput
            name="username"
            inputRef={register}
            error={errors.username}
            type="text"
            value={username}
          >
            Username
          </FormUserInput>
          <FormUserInput
            name="password"
            inputRef={register}
            error={errors.password}
            type="password"
            value={password}
          >
            Password
          </FormUserInput>
          <Notification />
        </FormUser>
      </ContainerLogin>
    </GlobalContainer>
  );
};

export default Login;
