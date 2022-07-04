import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface ILogo {
  lheight?: number;
  lwidth?: number;
  lhaveText?: boolean;
  fontSize?: string;
  lColor?: string;
}

interface ITitle {
  titlewidth: number;
  titleHeight: number;
  fontSize: string;
  logoColor: string;
}
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const OnTitle = styled.span`
  display: flex;
  align-items: center;
`;
const Title = styled.h1<ITitle>`
  font-weight: bold;
  color: ${(props) => props.logoColor};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.titlewidth};
  height: ${(props) => props.titleHeight};
`;
const Icon = styled.div`
  margin-bottom: 5px;
`;
const TitleUnder = styled.p`
  font-size: 20px;
  color: ${(props) => props.theme.color4};
`;

function TitleLogo({
  lheight = 52,
  lwidth = 52,
  lhaveText = true,
  fontSize = "52px",
  lColor = "black",
}: ILogo) {
  return (
    <TitleContainer>
      <OnTitle>
        <Title
          titlewidth={lwidth}
          titleHeight={lheight}
          fontSize={fontSize}
          logoColor={lColor}
        >
          N U G U
        </Title>
        <Icon>
          <FontAwesomeIcon
            icon={faDog}
            color={lColor}
            style={{
              width: `${lwidth}px`,
              height: `${lheight}px`,
              marginLeft: "8px",
            }}
          />
        </Icon>
      </OnTitle>
      {lhaveText && <TitleUnder>Animals Are Another Family</TitleUnder>}
    </TitleContainer>
  );
}

export default TitleLogo;
