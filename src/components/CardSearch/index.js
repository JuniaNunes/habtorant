import { CardSearchContainer } from "./style";
import { useHistory } from "react-router-dom";

const CardSearch = ({
  id,
  title,
  name,
  description,
  frequency,
  category,
  difficulty,
}) => {
  const history = useHistory();

  const handleNavigation = () => {
    const path =
      (title && `/edit-habit/${id}/`) || (name && `/edit-group/${id}/`);
    history.push(path);
  };

  return (
    <CardSearchContainer onClick={handleNavigation}>
      <p>{(title && "Habit") || (name && "Group")}</p>
      <h1>{title || name}</h1>
      <p>
        {category} - {difficulty}
      </p>
      <p>{description}</p>
      <p>{frequency}</p>
    </CardSearchContainer>
  );
};

export default CardSearch;
