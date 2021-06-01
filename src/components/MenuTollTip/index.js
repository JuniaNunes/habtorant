import React from "react";
import {
  MenuContainer,
  MenuHomeButton,
  MenuHomeLogo,
  MenuIcon,
  MenuIconsWrap,
  MenuPositioning,
} from "./style";
import { Search, Favorite, Group, Person } from "@material-ui/icons/";
import Habitorant from "../../Images/Habitorant.png";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { ReactComponent as Arrow } from "../../svgs/double-down-arrows.svg";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const MenuTollTip = () => {
  const history = useHistory();

  const { user } = React.useContext(UserContext);
  const { group: idGroup } = user;

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <MenuPositioning>
      <MenuContainer active={true}>
        <MenuIconsWrap>
          <MenuIcon>
            <Arrow />
          </MenuIcon>

          <MenuIcon
            edge="start"
            aria-label="open drawer"
            onClick={() => handleNavigation("/add-habit")}
          >
            <Favorite />
          </MenuIcon>
          <MenuIcon
            edge="start"
            aria-label="open drawer"
            onClick={() => handleNavigation(`/add-group`)}
          >
            <AiOutlineUsergroupAdd />
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
    </MenuPositioning>
  );
};

export default MenuTollTip;
