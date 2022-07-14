import styled from "styled-components";

interface IAuthInput {
  isAuthOn: boolean;
}
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
      transform: translateX(-40px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  animation: initAni 0.3s forwards;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  opacity: 0;
  color: ${(props) => props.theme.color};
  font-size: larger;
  border: 0px solid;
  background-color: ${(props) => props.theme.color3};
  border-radius: 30px;
  outline: none;
  width: 400px;
  height: 50px;
  padding: 0px 30px 0px 30px;
  margin: 0px 0px 0px 0px;
  &::placeholder {
    color: #ffffff7e;
  }
`;
export const SubmitBtn = styled.button`
  @keyframes initAniBtn {
    0% {
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  opacity: 0;
  animation: initAniBtn 0.3s forwards;
  position: relative;
  left: 50px;
  background-color: ${(props) => props.theme.color2};
  width: 300px;
  height: 50px;
  border: 0;
  color: white;
  font-size: 15px;
  font-weight: bold;
  margin: 10px 0 0 0;
  border-radius: 5px;
  box-shadow: 0px 2px 2px 2px rgba(176, 155, 133, 0.3);
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
  }
`;
export const AuthBtn = styled.button`
  opacity: 0;
  animation: initAni 0.3s forwards;
  font-weight: bold;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: 0;
  box-shadow: 0px 2px 2px 2px rgba(176, 155, 133, 0.3);
  background-color: ${(props) => props.theme.color3};
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 0px 0px rgba(176, 155, 133, 0.3);
  }
`;
export const ErrorModal = styled.span`
  margin: 5px 0px 5px 40px;
  font-size: 15px;
  color: #b0b0b07d;
`;
export const AuthInput = styled.input<IAuthInput>`
  @keyframes authInputAni {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  animation: ${(props) => props.isAuthOn && "authInputAni 0.5s forwards"};
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  color: ${(props) => props.theme.color};
  font-size: larger;
  border: 0px solid;
  background-color: ${(props) => props.theme.color3};
  border-radius: 30px;
  outline: none;
  width: 400px;
  height: 50px;
  padding: 0px 0px 0px 30px;
  margin: 10px 0px 0px 0px;
  &::placeholder {
    color: #ffffff7e;
  }
`;
