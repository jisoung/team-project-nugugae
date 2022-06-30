import styled from "styled-components";
import TitleLogo from "../LogIn/btns/titleLogo";

const NavContainer = styled.div`
  display: flex;
`;
function HomeNavView() {
  return (
    <NavContainer>
      <TitleLogo lhaveText={false} lwidth={52} lheight={52} />
    </NavContainer>
  );
}

export default HomeNavView;
