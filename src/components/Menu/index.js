import React from "react";
import {
  MenuContainer,
  MenuHomeButton,
  MenuHomeLogo,
  MenuIcon,
  MenuIconsWrap,
} from "./style";
import { Search, Favorite, Group, Person } from "@material-ui/icons/";
import Habitorant from "../../Images/Habitorant.png";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { ReactComponent as Arrow } from "../../svgs/double-down-arrows.svg";

const Menu = () => {
  const history = useHistory();

  const { user } = React.useContext(UserContext);
  const { group: idGroup } = user;

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <MenuContainer active={true}>
      <MenuIconsWrap>
        <MenuIcon>
          <Arrow />
        </MenuIcon>

        <MenuIcon
          edge="start"
          aria-label="open drawer"
          onClick={() => handleNavigation("/habits")}
        >
          <Favorite />
        </MenuIcon>
        <MenuIcon
          edge="start"
          aria-label="open drawer"
          onClick={() => handleNavigation(`/group/${idGroup}`)}
        >
          <Group />
        </MenuIcon>
        <MenuHomeButton onClick={() => handleNavigation("/home")}>
          <MenuHomeLogo src={Habitorant} />
        </MenuHomeButton>
        <MenuIcon edge="end" onClick={() => handleNavigation("/profile")}>
          <Person />
        </MenuIcon>
        <MenuIcon onClick={() => handleNavigation("/search")}>
          <Search />
        </MenuIcon>
      </MenuIconsWrap>
    </MenuContainer>
  );
};

export default Menu;
