import React from "react";
import { ActiviteItem } from "./style";
import { useHistory } from "react-router-dom";

const CardActivite = ({ id, title }) => {
  const history = useHistory();

  const handleHistory = (id, group) => {
    history.push(`/edit-activite/${id}`);
  };

  return (
    <ActiviteItem onClick={() => handleHistory(id)}>
      <h3>{title}</h3>
    </ActiviteItem>
  );
};

export default CardActivite;
