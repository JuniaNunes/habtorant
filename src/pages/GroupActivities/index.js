import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import CardActivite from "../../components/CardActivite";

const GroupActivities = () => {
  const [activities, setActivities] = useState([]);
  const state = useParams();

  const getGroupActivities = async () => {
    const response = await api.get(`/groups/${state.id}/`);
    setActivities(response.data.activities);
  };

  useEffect(getGroupActivities);

  return (
    <>
      {activities?.map(({ title, id }) => (
        <CardActivite key={id} title={title} id={id} />
      ))}
    </>
  );
};
export default GroupActivities;
