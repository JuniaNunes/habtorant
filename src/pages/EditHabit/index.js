import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import FormEdit from "../../components/FormEdit";
import FormUserInput from "../../components/FormUserInput";
import FormActionSelect from "../../components/FormActionSelect";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useState, useEffect } from "react";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../Images/BackgroundEditHabit.jpg";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Notification from "../../components/Notification";
import "react-toastify/dist/ReactToastify.css";
import MenuTollTip from "../../components/MenuTollTip";

let category = [
  { value: "Aim", content: "Aim" },
  { value: "Mechanical", content: "Mechanical" },
  { value: "Decision Making", content: "Decision Making" },
  { value: "Game Sense", content: "Game Sense" },
];
let difficulty = [
  { value: "Easy", content: "Easy" },
  { value: "Medium", content: "Medium" },
  { value: "Hard", content: "Hard" },
];

let frequency = [
  { value: "Daily", content: "Daily" },
  { value: "Weekly", content: "Weekly" },
  { value: "Weekend", content: "Weekend" },
];

let howMuchAchieved = [
  { value: 0, content: "0%" },
  { value: 25, content: "25%" },
  { value: 50, content: "50%" },
  { value: 75, content: "75%" },
  { value: 100, content: "100%" },
];

const markSelectedOptions = (data) => {
  category.forEach((option) => {
    if (option.value === data.category) {
      option.selected = true;
    }
  });
  difficulty.forEach((option) => {
    if (option.value === data.difficulty) {
      option.selected = true;
    }
  });
  frequency.forEach((option) => {
    if (option.value === data.frequency) {
      option.selected = true;
    }
  });
  howMuchAchieved.forEach((option) => {
    if (option.value === data.how_much_achieved) {
      option.selected = true;
    }
  });
};

toast.configure();

const EditHabit = () => {
  const params = useParams();

  const [selectedHabit, setSelectedHabit] = useState({});

  const notify = () =>
    toast("Successfully saved!", {
      autoClose: 2000,
      hideProgressBar: true,
      position: "top-center",
    });

  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const schema = yup.object().shape({
    title: yup.string().required("Field Required"),
    category: yup.string().required("Field Required"),
    difficulty: yup.string().required("Field Required"),
    frequency: yup.string().required("Field Required"),
    how_much_achieved: yup.number(),
  });

  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    api.get(`/habits/${params.id}/`).then((response) => {
      setSelectedHabit(response.data);
      setValue("title", response.data.title);
    });
  }, [params.id, setValue]);

  const handleForm = (data) => {
    api
      .patch(`/habits/${params.id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log(response));

    notify();
  };
  markSelectedOptions(selectedHabit);
  const { title } = selectedHabit;

  markSelectedOptions(selectedHabit);

  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <GlobalWrap>
        <FormEdit
          handleSubmit={handleSubmit(handleForm)}
          name="Habit"
          id={params.id}
          origin="/habits"
          deletePath={`/habits/${params.id}/`}
        >
          <FormUserInput
            name="title"
            inputRef={register}
            error={errors.title}
            value={title}
          >
            title
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
          <FormActionSelect
            name="how_much_achieved"
            inputRef={register}
            error={errors.how_much_achieved}
          >
            {howMuchAchieved}
          </FormActionSelect>
        </FormEdit>
        <Notification />
      </GlobalWrap>
      <MenuTollTip />
      <Menu />
    </GlobalContainer>
  );
};
export default EditHabit;

// let category = [
//   { value: "Aim", content: "Aim" },
//   { value: "Mechanical", content: "Mechanical" },
//   { value: "Decision Making", content: "Decision Making" },
//   { value: "Game Sense", content: "Game Sense" },
// ];
// let difficulty = [
//   { value: "Easy", content: "Easy" },
//   { value: "Medium", content: "Medium" },
//   { value: "Hard", content: "Hard" },
// ];

// let frequency = [
//   { value: "Daily", content: "Daily" },
//   { value: "Weekly", content: "Weekly" },
//   { value: "Weekend", content: "Weekend" },
// ];

// const EditHabit = () => {
//   const params = useParams();

//   const [habits] = useState(() => {
//     const getHabits = localStorage.getItem("habits") || "";
//     return JSON.parse(getHabits);
//   });

//   const selectedHabit =
//     habits.filter(({ id }) => id === Number(params.id))[0] || "";
//   const [inputValue, setInputValue] = useState(selectedHabit.title);

//   console.log(selectedHabit);
//   console.log(params);
//   console.log(habits);
//   console.log(inputValue);

//   const markSelectedOptions = (data) => {
//     category.map((option) => {
//       if (option.value === data.category) {
//         option.selected = true;
//       }
//     });
//     difficulty.map((option) => {
//       if (option.value === data.difficulty) {
//         option.selected = true;
//       }
//     });
//     frequency.map((option) => {
//       if (option.value === data.frequency) {
//         option.selected = true;
//       }
//     });
//   };

//   markSelectedOptions(selectedHabit);
