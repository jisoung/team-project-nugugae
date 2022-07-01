import styled from "styled-components";
import HomeNavPage from "../Components/Home/HomeNavView";
import HomeAdoptView from "../Components/Home/option/HomeAdoptPage";
import HomeFindPage from "../Components/Home/option/HomeFindView";
import HomeShopPage from "../Components/Home/option/HomeShopView";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("img/backgroundImg.webp");
  background-size: 100vw 100vh;
  width: 100vw;
  height: 100vh;
`;
const Img = styled.image`
  position: absolute;
`;
function HomeMainPage() {
  return (
    <MainContainer>
      <Img />
      <HomeNavPage />
      <HomeFindPage />
      <HomeAdoptView />
      <HomeShopPage />
    </MainContainer>
  );
}

export default HomeMainPage;
