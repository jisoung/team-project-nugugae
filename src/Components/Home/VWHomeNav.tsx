import TitleLogo from "../LogIn/titleLogo";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "../../STYLES/Home/STLHomeNav";
import { Link } from "react-router-dom";
import {useRecoilState} from "recoil";

function HomeNavView() {
  const profileStyle = {
    width: "26px",
    height: "26px",
    marginRight: "30px",
    cursor: "pointer",
  };
  const isLogin = useRecoilState(isLogin);
  return (
    <S.NavContainer>
      <S.TitleLogoContainer>
        <Link to="/">
          <TitleLogo
            lhaveText={false}
            lwidth={25}
            lheight={25}
            fontSize={"25px"}
            lColor={"white"}
          />
        </Link>
      </S.TitleLogoContainer>
      <S.CtgTexts>
        <S.CtgText>
          <Link to="find">FIND</Link>
        </S.CtgText>
        <S.CtgText>
          <Link to="adopt">ADOPT</Link>
        </S.CtgText>
        <S.CtgText>
          <Link to="shop">SHOP</Link>
        </S.CtgText>
      </S.CtgTexts>
      <span
        style={{
          marginRight: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/loginHome">
          <FontAwesomeIcon
            icon={faUser}
            color={"rgba(255, 255, 255, 0.5)"}
            style={profileStyle}
          />
        </Link>
      </span>
    </S.NavContainer>
  );
}

export default HomeNavView;
