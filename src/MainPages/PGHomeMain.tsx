import React from "react";
import styled from "styled-components";
import HomeMiddleView from "../COMPONENTS/Home/VWHomeMid";
import HomeNavPage from "../COMPONENTS/Home/VWHomeNav";

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
  return (
    <MainContainer>
      <HomeNavPage />
      <HomeMiddleView />
    </MainContainer>
  );
}

export default HomeMainPage;
