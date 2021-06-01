import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as yup from "yup";
import api from "../../services/api";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import FormEdit from "../../components/FormEdit";
import FormUserInput from "../../components/FormUserInput";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../Images/BackgroundEditHabit.jpg";

import { toast } from "react-toastify";
import Notification from "../../components/Notification";
import MenuTollTip from "../../components/MenuTollTip";

toast.configure();

const EditGroup = () => {
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const notify = () =>
    toast("Successfully saved!", {
      autoClose: 2000,
      hideProgressBar: true,
      position: "top-center",
    });

  const schema = yup.object().shape({
    name: yup.string().required("Field Required"),
    description: yup.string().required("Field Required"),
    category: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, setValue, getValues } = useForm({
    resolver: yupResolver(schema),
  });

  const params = useParams();
  const [group, setGroup] = useState({});

  const getGroup = async () => {
    await api
      .get(`/groups/${params.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setValue("name", response.data.name);
        setValue("description", response.data.description);

        const categoryValid = response.data.category.split("/")[1];
        setValue("category", categoryValid);

        setGroup(getValues());
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  useEffect(() => {
    getGroup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleForm = (data) => {
    console.log(data);
    data = { ...data, category: `habitorant/${data.category}` };

    api
      .patch(`/groups/${params.id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {})
      .catch((e) => console.log(e.response));
    notify();
  };

  const { name, description, category } = group;

  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <FormEdit
          handleSubmit={handleSubmit(handleForm)}
          name="Group"
          subscribePath={`/groups/${params.id}/subscribe/`}
          idParams={params.id}
        >
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
        </FormEdit>
        <Notification />
      </GlobalWrap>
      <MenuTollTip />
      <Menu />
    </GlobalContainer>
  );
};
export default EditGroup;
