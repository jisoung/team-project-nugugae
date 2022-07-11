import * as S from "../../../Styles/Detail/SmpNavStyle";
import TitleLogo from "../../LogIn/titleLogo";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function FindNavView() {
  const profileStyle = {
    width: "26px",
    height: "26px",
    marginRight: "100px",
    marginLeft: "100px",
    cursor: "pointer",
  };
  return (
    <S.NavContainer>
      <Link to="/">
        <div style={{ margin: "0px 0px 0px 100px" }}>
          <TitleLogo
            lwidth={30}
            lheight={30}
            lhaveText={false}
            fontSize="30px"
          />
        </div>
      </Link>
      <S.CtgTexts>
        <S.CtgText>FIND</S.CtgText>
        <S.CtgText>ADOPT</S.CtgText>
        <S.CtgText>SHOP</S.CtgText>
      </S.CtgTexts>
      <div>
        <FontAwesomeIcon
          icon={faUser}
          color={"rgba(0, 0, 0, 0.5)"}
          style={profileStyle}
        />
      </div>
    </S.NavContainer>
  );
}

export default FindNavView;
