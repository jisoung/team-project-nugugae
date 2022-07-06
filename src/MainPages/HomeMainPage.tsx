import React, { useRef } from "react";
import styled from "styled-components";
import HomeMiddleView from "../Components/Home/HomeMidView";
import HomeNavPage from "../Components/Home/HomeNavView";

interface IHomeRef<T> {
  current: T | null;
}
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
  const homeRef = React.useRef<HTMLInputElement>(null);
  homeRef.current?.addEventListener("wheel", (event) => {
    console.log(event);
  });
  return (
    <MainContainer ref={homeRef}>
      <HomeNavPage />
      <HomeMiddleView />
    </MainContainer>
  );
}

export default HomeMainPage;
