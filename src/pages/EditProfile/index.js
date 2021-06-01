import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import * as yup from "yup";
import api from "../../services/api";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import FormEditProfile from "../../components/FormEditProfile";
import FormUserInput from "../../components/FormUserInput";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../Images/BackgroundEditHabit.jpg";
import { toast } from "react-toastify";
import Notification from "../../components/Notification";
import MenuTollTip from "../../components/MenuTollTip";

toast.configure();

const EditProfile = () => {
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const [id] = useState(() => {
    const sessionId = localStorage.getItem("user_id") || "";
    return JSON.parse(sessionId);
  });

  const notify = () =>
    toast("Successfully saved!", {
      autoClose: 2000,
      hideProgressBar: true,
      position: "top-center",
    });

  const schema = yup.object().shape({
    email: yup.string().email().required("Field Required"),
  });

  const { register, handleSubmit, errors, setValue, getValues } = useForm({
    resolver: yupResolver(schema),
  });

  const [yupValues, setYupValues] = useState({});

  const getActivite = async () => {
    await api
      .get(`/users/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        setValue("email", response.data.email);
        setYupValues(getValues());
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  useEffect(() => {
    getActivite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleForm = async (data) => {
    await api
      .patch(`/users/${id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e.response));

    notify();
  };

  const { email } = yupValues;

  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <FormEditProfile handleSubmit={handleSubmit(handleForm)} name="Profile">
          <FormUserInput
            name="email"
            inputRef={register}
            error={errors.email}
            value={email}
          >
            Email
          </FormUserInput>
        </FormEditProfile>
        <Notification />
      </GlobalWrap>
      <MenuTollTip />
      <Menu />
    </GlobalContainer>
  );
};
export default EditProfile;
