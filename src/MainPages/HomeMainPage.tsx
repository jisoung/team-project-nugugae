import styled from "styled-components";
import HomeNavPage from "../Components/Home/HomeNavView";

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
    </MainContainer>
  );
}

export default HomeMainPage;
