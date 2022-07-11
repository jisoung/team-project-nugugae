import * as S from "../../../Styles/Detail/SmpNavStyle";
import TitleLogo from "../../LogIn/titleLogo";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S2 from "../../../Styles/Home/HomeNavStyle";
import { Link } from "react-router-dom";

function FindNavView() {
  const profileStyle = {
    width: "26px",
    height: "26px",
    marginRight: "100px",
    cursor: "pointer",
  };
  return (
    <S.NavContainer>
      <div style={{ margin: "0px 0px 0px 100px" }}>
        <TitleLogo lwidth={30} lheight={30} lhaveText={false} fontSize="30px" />
      </div>
      <S2.CtgTexts>
        <S2.CtgText>
          <Link to="find">FIND</Link>
        </S2.CtgText>
        <S2.CtgText>
          <Link to="adopt">ADOPT</Link>
        </S2.CtgText>
        <S2.CtgText>
          <Link to="shop">SHOP</Link>
        </S2.CtgText>
      </S2.CtgTexts>
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
