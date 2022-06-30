import styled from "styled-components";
import HomeNavPage from "../Components/Home/HomeNavView";
import HomeAdoptView from "../Components/Home/option/HomeAdoptPage";
import HomeFindPage from "../Components/Home/option/HomeFindView";
import HomeShopPage from "../Components/Home/option/HomeShopView";

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
