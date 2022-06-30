import styled from "styled-components";
import TitleLogo from "../LogIn/btns/titleLogo";

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CtgText = styled.button`
  font-family: Inria Sans;
  font-weight: 200;
  border: 0;
  background-color: #ffffff;
`;
function HomeNavView() {
  return (
    <NavContainer>
      <TitleLogo lhaveText={false} lwidth={52} lheight={52} />
      <CtgText>FIND</CtgText>
    </NavContainer>
  );
}

export default HomeNavView;
