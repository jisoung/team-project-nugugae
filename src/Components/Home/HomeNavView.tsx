import styled from "styled-components";
import TitleLogo from "../LogIn/btns/titleLogo";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
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
  const profileStyle = {
    marginLeft: "auto",
    size: "70px",
  };
  const menuStyle = {
    marginRight: "10px",
  };
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
        <AiOutlineSearch
          style={{
            marginBottom: "-5.5px",
            borderBottom: "1px solid",
          }}
        />
        <Search />
      </span>
      <CgProfile style={profileStyle} />
      <AiOutlineMenu style={menuStyle} />
    </NavContainer>
  );
}

export default HomeNavView;
