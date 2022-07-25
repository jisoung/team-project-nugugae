import SmpMainView from "../../COMPONENTS/Detail/sample/VWSmpMain";
import SmpNavView from "../../COMPONENTS/Detail/sample/VWSmpNav";
import SmpSideView from "../../COMPONENTS/Detail/sample/VWSmpSide";
import * as S from "../../STYLES/Detail/STLPGHome";

function PGShopHome() {
  return (
    <S.SmpContainer>
      <SmpNavView haveLine="shop" />
      <S.SmpMainContainer>
        <SmpSideView title="SHOP" />
        <SmpMainView />
      </S.SmpMainContainer>
    </S.SmpContainer>
  );
}

export default PGShopHome;
