import styled from "styled-components";
import SmpMainView from "../../COMPONENTS/Detail/sample/VWSmpMain";
import SmpNavView from "../../COMPONENTS/Detail/sample/VWSmpNav";
import SmpSideView from "../../COMPONENTS/Detail/sample/VWSmpSide";

const SmpContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SmpMainContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
`;

function PGAdoptHome() {
  return (
    <SmpContainer>
      <SmpNavView haveLine="adopt" />
      <SmpMainContainer>
        <SmpSideView title="ADOPT" />
        <SmpMainView />
      </SmpMainContainer>
    </SmpContainer>
  );
}

export default PGAdoptHome;
