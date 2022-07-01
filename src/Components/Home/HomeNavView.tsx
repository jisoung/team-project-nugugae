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
const Img = styled.img`
  position: absolute;
`;
const CtgTexts = styled.div`
  display: flex;
`;
const CtgText = styled.button`
  font-family: Inria Sans;
  font-weight: 200;
  border: 0;
  background-color: #ffffff;
`;
const Search = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
`;
function HomeNavView() {
  return (
    <NavContainer>
      <Img />
      <TitleLogo lhaveText={false} lwidth={52} lheight={52} />
      <CtgTexts>
        <CtgText>FIND</CtgText>
        <CtgText>ADOPT</CtgText>
        <CtgText>SHOP</CtgText>
      </CtgTexts>
      <span>
        <FontAwesomeIcon icon={faSearch} />
        <Search />
      </span>
      <span>
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faBars} />
      </span>
    </NavContainer>
  );
}

export default HomeNavView;
