import { ContainerCard, CardHabit } from "./style";

const Card = ({ completed }) => {
  return (
    <ContainerCard>
      {completed ? (
        <CardHabit style={{ background: "#10AC84" }}></CardHabit>
      ) : (
        <CardHabit style={{ background: "#FF4654" }}></CardHabit>
      )}
    </ContainerCard>
  );
};

export default Card;
