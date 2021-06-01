import React from "react";
import {
  ContainerCarrosel,
  ButtonAllGroups,
  Notification,
  DivButtonAllHabit,
} from "./style";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import api from "../../services/api";
import CardHabit from "../CardHabit";

const CarrosselHabit = ({ handleNavigation }) => {
  const [habits, setHabits] = React.useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  React.useEffect(() => {
    api
      .get(`/habits/personal/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const habitArr = response.data.filter(
          ({ achieved }) => achieved === false
        );
        setHabits(habitArr);
      })
      .catch((e) => console.log(e));
  }, [token]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <ContainerCarrosel>
      <Slider {...settings}>
        {habits.length > 0 ? (
          habits
            .filter((habit) => habit.how_much_achieved !== 100)
            .map(
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
          <DivButtonAllHabit>
            <Notification>You don't have tasks to do!</Notification>
            <ButtonAllGroups
              variant="contained"
              onClick={() => handleNavigation("/add-habit")}
              disableElevation
            >
              Add habit
            </ButtonAllGroups>
          </DivButtonAllHabit>
        )}
      </Slider>
    </ContainerCarrosel>
  );
};

export default CarrosselHabit;
