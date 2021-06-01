import BackGroundImage from "../../components/BackGroundImage";
import GlobalContainer from "../../components/GlobalContainer";
import GlobalWrap from "../../components/GlobalWrap";
import Menu from "../../components/Menu";
import Background from "../../Images/BackgroundProfile.jpg";
import {
  ProfileIcon,
  ProfileTitle,
  ProfileText,
  ProfileSubTitle,
  ProfileWrap,
  GroupsButton,
} from "./style";
import { useState, useEffect } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router";
import MenuTollTip from "../../components/MenuTollTip";

const Profile = () => {
  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    const { user_id } = jwt_decode(token);
    api.get(`users/${user_id}/`).then((response) => setUser(response.data));
  });

  const handleNavigation = (path) => {
    history.push(path);
  };

  const handleLogOut = (path) => {
    localStorage.clear();
    history.push(path);
  };

  return (
    <>
      <GlobalContainer>
        <BackGroundImage image={Background} />
        <GlobalWrap>
          <ProfileTitle>Profile</ProfileTitle>

          <ProfileIcon />
          <ProfileWrap>
            <ProfileSubTitle>Username</ProfileSubTitle>

            <ProfileText>{user.username}</ProfileText>

            <ProfileSubTitle sub>Email</ProfileSubTitle>

            <ProfileText>{user.email}</ProfileText>
          </ProfileWrap>
          <GroupsButton onClick={() => handleNavigation("/edit-profile")}>
            Edit Profile
          </GroupsButton>
          <GroupsButton onClick={() => handleLogOut("/")}>Log Out</GroupsButton>
        </GlobalWrap>
      </GlobalContainer>
      <MenuTollTip />
      <Menu />
    </>
  );
};

export default Profile;
