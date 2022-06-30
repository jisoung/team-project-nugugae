import styled from "styled-components";
import HomeNavPage from "./HomeNavView";
import HomeAdoptView from "./option/HomeAdoptView";
import HomeFindPage from "./option/HomeFindView";
import HomeShopPage from "./option/HomeShopView";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
function HomePage() {
  return (
    <MainContainer>
      <HomeNavPage />
      <HomeFindPage />
      <HomeAdoptView />
      <HomeShopPage />
    </MainContainer>
  );
}

export default HomePage;
