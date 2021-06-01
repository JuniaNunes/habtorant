import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import * as yup from "yup";
import GlobalWrap from "../../components/GlobalWrap";
import GlobalContainer from "../../components/GlobalContainer";
import BackGroundImage from "../../components/BackGroundImage";
import FormUserInput from "../../components/FormUserInput";
import Background from "../../Images/BackgroundAddHabit.jpg";
import Menu from "../../components/Menu";
import FormActionSelect from "../../components/FormActionSelect";
import FormAction from "../../components/FormAction";

import { toast } from "react-toastify";
import Notification from "../../components/Notification";
import MenuTollTip from "../../components/MenuTollTip";

toast.configure();

const AddHabit = () => {
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

  const [user_id] = useState(() => {
    const sessionId = localStorage.getItem("user_id") || "";
    return JSON.parse(sessionId);
  });

  const category = [
    { value: "Aim", content: "Aim" },
    { value: "Mechanical", content: "Mechanical" },
    { value: "Decision Making", content: "Decision Making" },
    { value: "Game Sense", content: "Game Sense" },
  ];
  const difficulty = [
    { value: "Easy", content: "Easy" },
    { value: "Medium", content: "Medium" },
    { value: "Hard", content: "Hard" },
  ];

  const frequency = [
    { value: "Daily", content: "Daily" },
    { value: "Weekly", content: "Weekly" },
    { value: "Weekend", content: "Weekend" },
  ];

  const schema = yup.object().shape({
    title: yup.string().required("Field Required"),
    category: yup.string().required("Field Required"),
    difficulty: yup.string().required("Field Required"),
    frequency: yup.string().required("Field Required"),
  });

  const { register, handleSubmit, errors, reset, getValues } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    data = { ...data, user: user_id, achieved: false, how_much_achieved: 0 };
    api
      .post("/habits/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        reset();
      })
      .catch((e) => console.log(e.response));
    notify();
  };

  const { title } = getValues();

  return (
    <>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <GlobalWrap>
          <FormAction handleSubmit={handleSubmit(handleForm)} name="Habit">
            <FormUserInput
              name="title"
              inputRef={register}
              error={errors.title}
              value={title}
            >
              Title
            </FormUserInput>
            <FormActionSelect
              name="category"
              inputRef={register}
              error={errors.category}
            >
              {category}
            </FormActionSelect>
            <FormActionSelect
              name="difficulty"
              inputRef={register}
              error={errors.difficulty}
            >
              {difficulty}
            </FormActionSelect>
            <FormActionSelect
              name="frequency"
              inputRef={register}
              error={errors.frequency}
            >
              {frequency}
            </FormActionSelect>
          </FormAction>
          <Notification />
        </GlobalWrap>
      </GlobalContainer>
      <MenuTollTip />
      <Menu />
    </>
  );
};

export default AddHabit;
