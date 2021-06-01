import GlobalContainer from "../../components/GlobalContainer";
import Menu from "../../components/Menu";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useHabits } from "../../providers/Habits";
import CardHabit from "../../components/CardHabit";
import {
  HabitsTitle,
  HabitSubTitle,
  HabitsWrap,
  HabitsTitleWrap,
  HabitsButton,
} from "./style";
import { useHistory } from "react-router";
import BackGroundImage from "../../components/BackGroundImage";
import Background from "../../Images/BackgrounGroupDetails.jpg";
import MenuTollTip from "../../components/MenuTollTip";

const Habits = () => {
  const history = useHistory();

  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });

  const { habits, setHabits } = useHabits();

  const getUserHabits = async () => {
    await api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data));
  };

  useEffect(getUserHabits);

  localStorage.setItem("habits", JSON.stringify(habits));

  const handleNavigation = (path) => {
    history.push(path);
  };

  habits.sort(function (a, b) {
    return a.how_much_achieved - b.how_much_achieved;
  });

  return (
    <GlobalContainer>
      <BackGroundImage image={Background} />
      <HabitsTitleWrap>
        <HabitsTitle>Habits</HabitsTitle>
        <HabitsButton onClick={() => handleNavigation("/add-habit")}>
          Add Habits
        </HabitsButton>
      </HabitsTitleWrap>
      <HabitsWrap>
        {habits.length > 0 ? (
          habits.map(
            (
              {
                id,
                title,
                category,
                difficulty,
                frequency,
                completed,
                how_much_achieved,
              },
              key
            ) => (
              <CardHabit
                title={title}
                category={category}
                difficulty={difficulty}
                frequency={frequency}
                completed={completed}
                how_much_achieved={how_much_achieved}
                key={key}
                id={id}
              />
            )
          )
        ) : (
          <HabitsTitleWrap>
            <HabitSubTitle>You don't have any habits yet.</HabitSubTitle>
          </HabitsTitleWrap>
        )}
      </HabitsWrap>
      <MenuTollTip />
      <Menu />
    </GlobalContainer>
  );
};
export default Habits;
