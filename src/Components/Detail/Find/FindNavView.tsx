import * as S from "../../../Styles/Detail/Find/FindNavStyle";
import TitleLogo from "../../LogIn/titleLogo";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FindNavView() {
  const profileStyle = {
    width: "26px",
    height: "26px",
    marginRight: "30px",
    cursor: "pointer",
  };
  return (
    <S.NavContainer>
      <TitleLogo lwidth={30} lheight={30} lhaveText={false} fontSize="30px" />
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
