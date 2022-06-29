import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import TitleLogo from "./btns/titleLogo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
const Btn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 333px;
  height: 54px;
  border: 0px solid;
  border-radius: 5px;
  padding-left: 30px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  background-color: ${(props) =>
    props.name === "logIn" ? props.theme.color2 : props.theme.color3};
  margin-bottom: 20px;
  box-shadow: 0px 2px 2px 2px rgba(176, 155, 133, 0.3);
  transition: 0.2s ease-in;
  &:hover {
    color: ${(props) => props.theme.color};
    box-shadow: 0 0 0 0;
  }
`;

function LogInHomePage() {
  return (
    <Container>
      <TitleLogo />
      <Link to="login">
        <Btn name="logIn">LOGIN</Btn>
      </Link>
      <Link to="signUp">
        <Btn name="signUp">SIGN UP</Btn>
      </Link>
      <Outlet />
    </Container>
  );
}

export default LogInHomePage;
