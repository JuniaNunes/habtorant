import { useHistory } from "react-router";
import { GoalsContainer } from "./style";

const CardGoals = ({
  id,
  title,
  difficulty,
  how_much_achieved,
  achieved = false,
}) => {
  const history = useHistory();

  const handleHistory = (id) => {
    history.push(`/edit-goal/${id}`);
  };

  return (
    <div>
      {how_much_achieved === 100 ? (
        <GoalsContainer
          style={{ background: "#10AC84" }}
          onClick={() => handleHistory(id)}
        >
          <h2>{title}</h2>
          <p>Difficulty - {difficulty}</p>
          <p>Frequency - {how_much_achieved}%</p>
        </GoalsContainer>
      ) : (
        <GoalsContainer
          style={{ background: "#FF4654" }}
          onClick={() => handleHistory(id)}
        >
          <h2>{title}</h2>
          <p>Difficulty - {difficulty}</p>
          <p>Frequency - {how_much_achieved}%</p>
        </GoalsContainer>
      )}
    </div>
  );
};
export default CardGoals;
