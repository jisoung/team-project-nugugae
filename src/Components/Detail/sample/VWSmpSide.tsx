import { useState } from "react";
import * as S from "../../../Styles/Detail/STLSmpSide";
interface ISideProps {
  title: string;
}

function SmpSideView({ title }: ISideProps) {
  const [isMenuOn, setIsMenuOn] = useState(false);
  const onClick = () => {
    setIsMenuOn((current) => !current);
  };
  return (
    <S.SideContainer>
      <S.Title>{title}</S.Title>
      <S.Category>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h2>CATEGORY</h2>
          <S.CategoryBtn onClick={onClick}>-</S.CategoryBtn>
        </div>
        <S.CategoryUl>
          <S.CategoryLi menuOn={isMenuOn}>DOG</S.CategoryLi>
          <S.CategoryLi menuOn={isMenuOn}>CAT</S.CategoryLi>
          <S.CategoryLi menuOn={isMenuOn}>OTHER</S.CategoryLi>
        </S.CategoryUl>
      </S.Category>
    </S.SideContainer>
  );
}

export default SmpSideView;
