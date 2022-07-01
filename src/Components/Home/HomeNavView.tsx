import styled from "styled-components";
import TitleLogo from "../LogIn/btns/titleLogo";
import { faSearch, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 15vh;
`;
const TitleLogoContainer = styled.div`
  margin: 0px 80px 0px 150px;
`;
const CtgTexts = styled.div`
  display: flex;
  margin-right: auto;
`;
const CtgText = styled.button`
  font-family: Inria Sans;
  font-weight: 200;
  margin: 0px 20px 0px 0px;
  border: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0);
`;
const Search = styled.input`
  font-size: 20px;
  border: 0;
  border-bottom: 1px solid black;
  height: 30px;
  outline: none;
  width: 300px;
  padding-left: 20px;
  background-color: rgba(0, 0, 0, 0);
`;
function HomeNavView() {
  const profileStyle = {
    width: "26px",
    height: "26px",
    marginRight: "30px",
  };
  const menuStyle = {
    width: "30px",
    height: "30px",
  };
  return (
    <NavContainer>
      <TitleLogoContainer>
        <TitleLogo
          lhaveText={false}
          lwidth={25}
          lheight={25}
          fontSize={"25px"}
          lColor={"white"}
        />
      </TitleLogoContainer>
      <CtgTexts>
        <CtgText>FIND</CtgText>
        <CtgText>ADOPT</CtgText>
        <CtgText>SHOP</CtgText>
      </CtgTexts>
      <span style={{ marginRight: "auto" }}>
        <FontAwesomeIcon icon={faSearch} style={{ marginRight: "-15px" }} />
        <Search />
      </span>
      <span
        style={{
          marginRight: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon icon={faUser} style={profileStyle} />
        <FontAwesomeIcon icon={faBars} style={menuStyle} />
      </span>
    </NavContainer>
  );
}

export default HomeNavView;
