import React from "react";
import { HabitItem } from "./style";
import { useHistory } from "react-router-dom";

const CardHabit = ({
  id,
  title,
  category,
  difficulty,
  frequency,
  how_much_achieved,
}) => {
  const history = useHistory();

  const handleHistory = (id) => {
    history.push(`/edit-habit/${id}/`);
  };

  return (
    <>
      {how_much_achieved === 100 ? (
        <HabitItem
          onClick={() => handleHistory(id)}
          style={{ background: "#10AC84" }}
        >
          <h2>{title}</h2>
          <p>
            {category} - {difficulty}
          </p>
          <p>Frequency - {frequency}</p>

          {how_much_achieved === 100 ? (
            <p>Completed</p>
          ) : (
            <p>Completed - {how_much_achieved}%</p>
          )}
        </HabitItem>
      ) : (
        <HabitItem
          onClick={() => handleHistory(id)}
          style={{ background: "#FF4654" }}
        >
          <h2>{title}</h2>
          <p>
            {category} - {difficulty}
          </p>
          <p>Frequency - {frequency}</p>

          {how_much_achieved === 100 ? (
            <p>Completed</p>
          ) : (
            <p>Completed - {how_much_achieved}%</p>
          )}
        </HabitItem>
      )}
    </>
  );
};

export default CardHabit;
