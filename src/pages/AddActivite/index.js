import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import * as yup from "yup";
import GlobalWrap from "../../components/GlobalWrap";
import GlobalContainer from "../../components/GlobalContainer";
import BackGroundImage from "../../components/BackGroundImage";
import FormUserInput from "../../components/FormUserInput";
import Background from "../../Images/BackgroundAddActivite.png";
import Menu from "../../components/Menu";
import FormAction from "../../components/FormAction";

import { toast } from "react-toastify";
import Notification from "../../components/Notification";
import MenuTollTip from "../../components/MenuTollTip";

toast.configure();

const AddGroup = () => {
  const [inputTitle, setInputTitle] = useState("");
  const {
    state: { group },
  } = useLocation();

  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const notify = () =>
    toast("Successfully added!", {
      autoClose: 2000,
      hideProgressBar: true,
      position: "top-center",
    });

  const schema = yup.object().shape({
    title: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    const today = new Date().toLocaleString();
    const fullData = today.split(" ")[0];
    const year = fullData.split("/")[2];
    const month = fullData.split("/")[1];
    const day = fullData.split("/")[0];
    const time = today.split(" ")[1];
    const realizationTime = `${year}-${month}-${day}T${time}Z`;
    data = { ...data, realization_time: realizationTime, group: group };

    await api
      .post("/activities/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        reset();
      })
      .catch((e) => console.log(e.response));

    notify();
  };

  return (
    <>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <GlobalWrap>
          <FormAction handleSubmit={handleSubmit(handleForm)} name="Activite">
            <FormUserInput
              name="title"
              inputRef={register}
              error={errors.title}
              value={inputTitle}
              setInputValue={setInputTitle}
            >
              Name
            </FormUserInput>
          </FormAction>
          <Notification />
        </GlobalWrap>
      </GlobalContainer>
      <MenuTollTip />
      <Menu />
    </>
  );
};

export default AddGroup;
