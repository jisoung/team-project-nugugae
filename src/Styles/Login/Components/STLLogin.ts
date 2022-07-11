import styled from "styled-components";

export const Exit = styled.button`
  position: absolute;
  border: 0px solid;
  left: 0px;
  top: 0px;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0);
  color: black;
  cursor: pointer;
  transition: 0.3s ease-in;
  &:hover {
    color: ${(props) => props.theme.color3};
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
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
  color: ${(props) => props.theme.color4};
  font-size: larger;
  border: 0px solid;
  background-color: ${(props) => props.theme.color2};
  border-radius: 30px;
  outline: none;
  width: 500px;
  height: 50px;
  padding: 0px 0px 0px 30px;
  margin: 20px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
`;
export const SubmitBtn = styled.button`
  @keyframes initAniBtn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  animation: initAniBtn 0.3s forwards;
  opacity: 0;
  background-color: ${(props) => props.theme.color4};
  width: 200px;
  height: 50px;
  border: 0;
  color: ${(props) => props.theme.color};
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0 0 0;
  border-radius: 5px;
  box-shadow: 0px 2px 2px 2px rgba(176, 155, 133, 0.3);
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
  }
`;
