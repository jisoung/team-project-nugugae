import { useRef } from "react";
import styled from "styled-components";
import HomeMiddleView from "../Components/Home/HomeMidView";
import HomeNavPage from "../Components/Home/HomeNavView";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("img/backgroundImg.webp");
  background-size: 100vw 100vh;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
`;
function HomeMainPage() {
  const homeRef = useRef<any>();
  console.log(homeRef);
  return (
    <MainContainer ref={homeRef}>
      <HomeNavPage />
      <HomeMiddleView />
    </MainContainer>
  );
}

export default HomeMainPage;
