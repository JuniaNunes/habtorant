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

const EditActivite = () => {
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
    title: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, setValue, getValues } = useForm({
    resolver: yupResolver(schema),
  });

  const params = useParams();
  const [yupValues, setYupValues] = useState({});
  const [group, setGroup] = useState({});

  const getActivite = async () => {
    await api
      .get(`/activities/${params.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        setValue("title", response.data.title);
        setGroup(response.data.group);
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

  const handleForm = (data) => {
    const today = new Date().toLocaleString();
    const fullData = today.split(" ")[0];
    const year = fullData.split("/")[2];
    const month = fullData.split("/")[1];
    const day = fullData.split("/")[0];
    const time = today.split(" ")[1];
    const realizationTime = `${year}-${month}-${day}T${time}Z`;
    data = { ...data, realization_time: realizationTime, group: group };
    console.log(data);

    api
      .patch(`/activities/${params.id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e.response));

    notify();
  };

  const { title } = yupValues;

  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <FormEdit
          handleSubmit={handleSubmit(handleForm)}
          name="Activite"
          deletePath={`/activities/${params.id}/`}
        >
          <FormUserInput
            name="title"
            inputRef={register}
            error={errors.title}
            value={title}
          >
            Title
          </FormUserInput>
        </FormEdit>
        <Notification />
      </GlobalWrap>
      <MenuTollTip />
      <Menu />
    </GlobalContainer>
  );
};
export default EditActivite;
