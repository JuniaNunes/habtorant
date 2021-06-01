import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import * as yup from "yup";
import GlobalWrap from "../../components/GlobalWrap";
import GlobalContainer from "../../components/GlobalContainer";
import BackGroundImage from "../../components/BackGroundImage";
import FormUserInput from "../../components/FormUserInput";
import Background from "../../Images/BackgroundAddGroup.jpg";
import Menu from "../../components/Menu";
import FormAction from "../../components/FormAction";

import { toast } from "react-toastify";
import Notification from "../../components/Notification";
import MenuTollTip from "../../components/MenuTollTip";

toast.configure();

const AddGroup = () => {
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
    name: yup.string().required("Field Required"),
    description: yup.string().required("Field Required"),
    category: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, reset, getValues } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    console.log(data);
    data = { ...data, category: `habitorant/${data.category}` };

    await api
      .post("/groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        reset();
      })
      .catch((e) => console.log(e.response));
    notify();
  };

  const { name, description, category } = getValues();

  return (
    <>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <GlobalWrap>
          <FormAction handleSubmit={handleSubmit(handleForm)} name="Group">
            <FormUserInput
              name="name"
              inputRef={register}
              error={errors.name}
              value={name}
            >
              Name
            </FormUserInput>
            <FormUserInput
              name="description"
              inputRef={register}
              error={errors.description}
              value={description}
            >
              Description
            </FormUserInput>
            <FormUserInput
              name="category"
              inputRef={register}
              error={errors.category}
              value={category}
            >
              Category
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
