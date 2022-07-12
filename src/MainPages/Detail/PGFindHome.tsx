import SmpMainView from "../../COMPONENTS/Detail/sample/VWSmpMain";
import SmpNavView from "../../COMPONENTS/Detail/sample/VWSmpNav";
import SmpSideView from "../../COMPONENTS/Detail/sample/VWSmpSide";
import * as S from "../../STYLES/Detail/STLPGHome";

function PGFindHome() {
  return (
    <S.SmpContainer>
      <SmpNavView haveLine="find" />
      <S.SmpMainContainer>
        <SmpSideView title="FIND" />
        <SmpMainView />
      </S.SmpMainContainer>
    </S.SmpContainer>
  );
}

export default PGFindHome;
