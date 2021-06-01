import React from "react";

import { useHistory } from "react-router";
import CarrosselHabit from "../../components/CarroselHabit";
import Menu from "../../components/Menu";
import CardGroup from "../../components/CardGroup";
import api from "../../services/api";

import {
  HomeContainer,
  HomeTitle,
  HomeHabitWrap,
  HomeGroupWrap,
  Group,
  ButtonAllGroups,
  SubTitle,
  Notification,
} from "./style";
import { UserContext } from "../../providers/UserProvider";
import GlobalContainer from "../../components/GlobalContainer";
import BackgroundImage from "../../components/BackGroundImage";
import GlobalWrap from "../../components/GlobalWrap";
import Background from "../../Images/BackgroundHome.jpg";
import MenuTollTip from "../../components/MenuTollTip";

const Home = () => {
  const [group, setGroup] = React.useState({});
  const [showGroup, setShowGroup] = React.useState(false);
  const history = useHistory();

  const { user } = React.useContext(UserContext);
  const { group: idGroup } = user;

  React.useEffect(() => {
    if (idGroup) {
      api
        .get(`/groups/${idGroup}/`)
        .then((request) => {
          setGroup(request.data);
          setShowGroup(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [idGroup]);

  const { id, name, description, category } = group;

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <>
      <GlobalContainer>
        <BackgroundImage image={Background} />
        <GlobalWrap>
          <HomeContainer>
            <HomeTitle>Home</HomeTitle>

            <HomeHabitWrap>
              <SubTitle>To do</SubTitle>
            </HomeHabitWrap>
          </HomeContainer>
          <CarrosselHabit handleNavigation={handleNavigation} />

          <HomeContainer>
            <HomeGroupWrap>
              <SubTitle>Group</SubTitle>

              <Group>
                {showGroup ? (
                  <>
                    <CardGroup
                      id={id}
                      name={name}
                      description={description}
                      category={category}
                      details={true}
                    />
                    <ButtonAllGroups
                      variant="contained"
                      onClick={() => handleNavigation("/groups")}
                      disableElevation
                    >
                      See all groups
                    </ButtonAllGroups>
                  </>
                ) : (
                  <>
                    <Notification>
                      You are not subscribed in any groups!
                    </Notification>
                    <ButtonAllGroups
                      variant="contained"
                      onClick={() => handleNavigation("/groups")}
                      disableElevation
                    >
                      See all groups
                    </ButtonAllGroups>
                  </>
                )}
              </Group>
            </HomeGroupWrap>
          </HomeContainer>
        </GlobalWrap>
      </GlobalContainer>
      <MenuTollTip />
      <Menu />
    </>
  );
};

export default Home;
