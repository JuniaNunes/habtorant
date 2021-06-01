import React from "react";
import jwt_decode from "jwt-decode";
import api from "../../services/api";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({});

  const token = JSON.parse(localStorage.getItem("token"));
  const tokenDecode = jwt_decode(token);
  const { user_id } = tokenDecode;

  React.useEffect(() => {
    api
      .get(`/users/${user_id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((e) => console.log(e));
  }, [user_id, token]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
