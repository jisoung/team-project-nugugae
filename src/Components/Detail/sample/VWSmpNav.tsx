import * as S from "../../../STYLES/Detail/STLSmpNav";
import TitleLogo from "../../LogIn/titleLogo";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface INavCtgProps {
  haveLine: string;
}
function FindNavView({ haveLine }: INavCtgProps) {
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
        <Link to="/find">
          <S.CtgText haveLine={haveLine === "find"}>FIND</S.CtgText>
        </Link>
        <Link to="/adopt">
          <S.CtgText haveLine={haveLine === "adopt"}>ADOPT</S.CtgText>
        </Link>
        <Link to="/shop">
          <S.CtgText haveLine={haveLine === "shop"}>SHOP</S.CtgText>
        </Link>
      </S.CtgTexts>
      <Link to="/loginHome">
        <div>
          <FontAwesomeIcon
            icon={faUser}
            color={"rgba(0, 0, 0, 0.5)"}
            style={profileStyle}
          />
        </div>
      </Link>
    </S.NavContainer>
  );
}

export default FindNavView;
