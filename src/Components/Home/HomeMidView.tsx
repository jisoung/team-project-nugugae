import * as S from "../../Styles/Home/HomeMidStyle";

function HomeMidView() {
  return (
    <S.MidContainer>
      <S.TextTitle>Animals Are Another Family</S.TextTitle>
      <S.TextNomal style={{ animationDelay: "0.2s" }}>
        Do you want to <S.TextBold>find</S.TextBold> a family
      </S.TextNomal>
      <S.TextNomal style={{ animationDelay: "0.4s" }}>
        Do you want to <S.TextBold>adopt</S.TextBold> a family
      </S.TextNomal>
      <S.TextNomal style={{ animationDelay: "0.6s" }}>
        Why are you hesitating?
      </S.TextNomal>
      <br />
      <br />
      <S.TextBold style={{ animationDelay: "0.8s" }}>START NOW</S.TextBold>
    </S.MidContainer>
  );
}

export default HomeMidView;
