import styled from "styled-components";
import TitleLogo from "../LogIn/btns/titleLogo";
const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  position: absolute;
`;

const CtgText = styled.button`
  font-family: Inria Sans;
  font-weight: 200;
  border: 0;
  background-color: #ffffff;
`;

const Search = styled.input`
  border: 0;
  border-bottom: 1px white;
`;
function HomeNavView() {
  return (
    <NavContainer>
      <Img src={require("../Home/img")} />
      <TitleLogo lhaveText={false} lwidth={52} lheight={52} />
      <CtgText>FIND</CtgText>
      <CtgText>ADOPT</CtgText>
      <CtgText>SHOP</CtgText>
      <Search />
    </NavContainer>
  );
}

export default HomeNavView;
