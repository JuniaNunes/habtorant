import React from "react";
import { useHistory } from "react-router-dom";
import { GroupItem } from "./style";

const CardGroup = ({ id, name, description, category, details }) => {
  const history = useHistory();
  const handleClick = (id) => {
    if (details) {
      history.push(`/group/${id}`);
    } else {
      history.push(`/edit-group/${id}`);
    }
  };

  return (
    <GroupItem onClick={() => handleClick(id)}>
      <h2>{name}</h2>

      <p>Description - {description}</p>

      <p>Category - {category.split("/")[1]}</p>
    </GroupItem>
  );
};

export default CardGroup;
