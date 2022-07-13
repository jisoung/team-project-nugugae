import { Link, useLocation } from "react-router-dom";
import * as S from "../../../STYLES/Detail/STLSmpMain";

function VWSmpMain() {
  const location = useLocation();
  console.log(location);
  const bundles = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <S.SmpMainContainer>
      {bundles.map((bundle) => (
        <Link to="animal">
          <S.Bundle>{bundle}</S.Bundle>
          <p>{location.search}</p>
        </Link>
      ))}
    </S.SmpMainContainer>
  );
}

export default VWSmpMain;
