import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
export const Btn = styled.button`
  @keyframes initAni {
    0% {
      opacity: 0;
      transform: translateX(-40px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  opacity: 0;
  animation: initAni 0.3s forwards;
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 333px;
  height: 54px;
  padding-left: 30px;
  border: 0px solid;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  background-color: ${(props) =>
    props.name === "logIn" ? props.theme.color2 : props.theme.color3};
  margin: 20px;
  box-shadow: 0px 2px 2px 2px rgba(176, 155, 133, 0.3);
  transition: 0.2s ease-in;
  &:hover {
    color: ${(props) => props.theme.color};
    box-shadow: 0 0 0 0;
  }
`;
