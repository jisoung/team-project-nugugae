import styled from "styled-components";

const MidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 150px;
  margin-top: 130px;
`;

const TextTitle = styled.h1`
  @keyframes TitleAni {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  animation: 0.5s TitleAni;
  color: ${(props) => props.theme.color4};
  font-size: 48px;
  margin-bottom: 20px;
`;

const TextNomal = styled.span`
  @keyframes TextAni {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  animation: 0.5s TextAni forwards;
  animation-fill-mode: forwards;
  opacity: 0;
  font-size: 36px;
  font-weight: 10;
  color: ${(props) => props.theme.color2};
  margin-bottom: 5px;
`;

const TextBold = styled(TextNomal)`
  color: ${(props) => props.theme.color4};
  font-weight: 500;
`;

function HomeMidView() {
  return (
    <MidContainer>
      <TextTitle>Animals Are Another Family</TextTitle>
      <TextNomal style={{ animationDelay: "0.5s" }}>
        Do you want to <TextBold>find</TextBold> a family
      </TextNomal>
      <TextNomal style={{ animationDelay: "1s" }}>
        Do you want to <TextBold>adopt</TextBold> a family
      </TextNomal>
      <TextNomal style={{ animationDelay: "1.5s" }}>
        Why are you hesitating?
      </TextNomal>
      <br />
      <br />
      <TextBold style={{ animationDelay: "2s" }}>START NOW</TextBold>
    </MidContainer>
  );
}

export default HomeMidView;
