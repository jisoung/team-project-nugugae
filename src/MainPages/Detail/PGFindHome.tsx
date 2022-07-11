import styled from "styled-components";
import SmpMainView from "../../Components/Detail/sample/VWSmpMain";
import SmpNavView from "../../Components/Detail/sample/VWSmpNav";
import SmpSideView from "../../Components/Detail/sample/VWSmpSide";

const SmpContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SmpMainContainer = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
`;
function FindHomePage() {
  return (
    <SmpContainer>
      <SmpNavView />
      <SmpMainContainer>
        <SmpSideView title="FIND" />
        <SmpMainView />
      </SmpMainContainer>
    </SmpContainer>
  );
}

export default FindHomePage;
