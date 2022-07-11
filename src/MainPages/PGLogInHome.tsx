import { Link } from "react-router-dom";
import TitleLogo from "../COMPONENTS/LogIn/titleLogo";
import * as S from "../STYLES/Login/STLLoginHomePage";

function LogInHomePage() {
  return (
    <S.Container>
      <TitleLogo />
      <Link to="login">
        <S.Btn name="logIn">LOGIN</S.Btn>
      </Link>
      <Link to="signUp">
        <S.Btn name="signUp" style={{ animationDelay: "0.15s" }}>
          SIGN UP
        </S.Btn>
      </Link>
    </S.Container>
  );
}

export default LogInHomePage;
