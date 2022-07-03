import styled from "styled-components";
import TitleLogo from "../LogIn/btns/titleLogo";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
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
  color: #ffffffb1;
  background-color: rgba(0, 0, 0, 0);
  transition: 0.2s ease-in;
  &:hover {
    color: white;
  }
`;
const Search = styled.input`
  font-family: Inria Serif;
  font-size: 18px;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  height: 30px;
  outline: none;
  width: 300px;
  padding-left: 20px;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0);
`;
function HomeNavView() {
  const profileStyle = {
    width: "26px",
    height: "26px",
    marginRight: "30px",
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
        <FontAwesomeIcon
          icon={faSearch}
          color={"rgba(255, 255, 255, 0.4)"}
          style={{ marginRight: "-15px" }}
        />
        <Search />
      </span>
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
    </NavContainer>
  );
}

export default HomeNavView;
