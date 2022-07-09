import TitleLogo from "../LogIn/titleLogo";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "../../Styles/Home/HomeNavStyle";

function HomeNavView() {
  const profileStyle = {
    width: "26px",
    height: "26px",
    marginRight: "30px",
  };
  return (
    <S.NavContainer>
      <S.TitleLogoContainer>
        <TitleLogo
          lhaveText={false}
          lwidth={25}
          lheight={25}
          fontSize={"25px"}
          lColor={"white"}
        />
      </S.TitleLogoContainer>
      <S.CtgTexts>
        <S.CtgText>FIND</S.CtgText>
        <S.CtgText>ADOPT</S.CtgText>
        <S.CtgText>SHOP</S.CtgText>
      </S.CtgTexts>
      <span
        style={{
          marginRight: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faUser}
          color={"rgba(255, 255, 255, 0.5)"}
          style={profileStyle}
        />
      </span>
    </S.NavContainer>
  );
}

export default HomeNavView;
