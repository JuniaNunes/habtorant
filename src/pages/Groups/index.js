import { useState, useEffect } from "react";
import api from "../../services/api";
import { useHistory } from "react-router";
import {
  GroupsTitle,
  GroupsWrap,
  GroupsTitleWrap,
  GroupsButton,
} from "./style";
import GlobalContainer from "../../components/GlobalContainer";
import Menu from "../../components/Menu";
import CardGroup from "../../components/CardGroup";
import MenuTollTip from "../../components/MenuTollTip";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [nextPage, setNextPage] = useState("1");

  const [token] = useState(() => {
    const sessionToken = localStorage.getItem("token") || "";
    return JSON.parse(sessionToken);
  });
  const history = useHistory();
  const patt = /\d+$/;
  const getUserGroups = async (page) => {
    await api
      .get(`/groups/?category=habitorant/&page=${page}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const pageGroups = response.data.results;

        if (pageGroups.length > 0) {
          setGroups([...groups, pageGroups]);
        }
        if (!response.data.next) {
          setNextPage(response.data.next);
        } else {
          setNextPage(response.data.next.match(patt)[0]);
        }
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  useEffect(() => {
    if (!!nextPage) {
      getUserGroups(nextPage);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPage]);

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <GlobalContainer>
      <GroupsTitleWrap>
        <GroupsTitle>Groups</GroupsTitle>
        <GroupsButton onClick={() => handleNavigation("/add-group")}>
          Add Group
        </GroupsButton>
      </GroupsTitleWrap>
      <GroupsWrap>
        {groups.flat().map(({ id, name, description, category }) => (
          <CardGroup
            key={id}
            id={id}
            name={name}
            description={description}
            category={category}
          />
        ))}
      </GroupsWrap>
      <MenuTollTip />
      <Menu />
    </GlobalContainer>
  );
};
export default Groups;
