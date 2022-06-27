import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`;
const OnTitle = styled.span`
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 40px;
  color: black;
`;
const Icon = styled.div`
  margin-bottom: 5px;
`;
const TitleUnder = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.brownTheme.color4};
`;
const Btn = styled.button`
  display: flex;
  align-items: center;
  width: 333px;
  height: 54px;
  border: 0px solid;
  border-radius: 5px;
  padding-left: 30px;
  color: white;
  font-size: 24px;
  font-weight: bold;
  background-color: ${(props) =>
    props.name === "logIn"
      ? props.theme.brownTheme.color2
      : props.theme.brownTheme.color3};
  margin-bottom: 30px;
`;

function LogInPage() {
  return (
    <Container>
      <TitleContainer>
        <OnTitle>
          <Title>N U G U</Title>
          <Icon>
            <svg
              fill="none"
              height="38"
              viewBox="0 0 20 20"
              width="38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m11.7703 2.39423c.4158-.29934.8997-.39423 1.2297-.39423h1.446c.4531 0 .8977.12314 1.2863.35627l1.7822 1.06933c.3012.18073.4855.50623.4855.8575v1.2169c0 .82843-.6716 1.5-1.5 1.5h-.5v8.0377c.4214.0654.8427.222 1.1951.5157.509.4241.8049 1.0764.8049 1.9466 0 .2761-.2239.5-.5.5h-2.9992-8.5008c-1.65685 0-3-1.3431-3-3 0-.9806.47097-1.8513 1.19692-2.3979.22061-.1661.53409-.1219.70019.0987s.12192.5341-.09868.7002c-.48585.3658-.79843.9458-.79843 1.599 0 1.1046.89543 2 2 2 .28751 0 .4699-.0704.58984-.1504.12307-.082.21135-.195.27545-.3232.06507-.1301.1001-.2663.11808-.3742.00879-.0528.01299-.0956.01497-.1234.00099-.0137.0014-.0235.00157-.0286l.0001-.0031v-.0019l.00008-.0092.00052-.031c.00057-.0263.00167-.0634.00381-.1105.00428-.0941.01271-.2282.02931-.3943.03316-.3316.09922-.7935.2312-1.3215.26253-1.0501.79458-2.3953 1.88152-3.4823 1.843-1.84296 1.85355-4.31581 1.85355-5.1464v-1.5c0-.76296.3291-1.28807.7703-1.60577zm.1537 4.50611c-.1554 1.25571-.6288 3.01158-2.07045 4.45326-.91306.913-1.38101 2.0678-1.61848 3.0177-.11802.472-.17696.8851-.2063 1.1785-.01465.1464-.02185.2623-.02538.3401-.00177.0388-.00261.0681-.00302.0868l-.00034.02-.00003.0043v.0012l-.00002.0029-.00009.0073-.00053.0211c-.00057.0169-.00161.0393-.00356.0666-.00388.0543-.0114.1286-.02604.2165-.0289.1733-.08762.4121-.21005.657-.00439.0088-.00886.0176-.01343.0264h6.17312c-.1006-.3194-.3033-.6487-.6522-.8322-.1857-.0978-.4342-.1678-.768-.1678h-.9992c-.2761 0-.5-.2239-.5-.5s.2239-.5.5-.5h1c.1759 0 .3425.0138.5.0401v-2.5401c0-.2761.2239-.5.5-.5s.5.2239.5.5v2.9481c.5792.4176.8468 1.0394.9482 1.5519h1.9999c-.0756-.3277-.2255-.5386-.3932-.6784-.257-.2142-.6292-.3216-1.0549-.3216-.2761 0-.5-.2239-.5-.5v-9c0-.27614.2239-.5.5-.5h1c.2761 0 .5-.22386.5-.5v-1.2169l-1.7822-1.06934c-.2331-.13987-.4999-.21376-.7718-.21376h-1.446c-.17 0-.4361.05511-.6453.20577-.1838.1323-.3547.35719-.3547.79423v1.5c0 .08666.0301.22777.1058.33285.0573.07958.1572.16715.3942.16715s.3369-.08757.3942-.16715c.0757-.10508.1058-.24619.1058-.33285 0-.27614.2239-.5.5-.5s.5.22386.5.5c0 .24668-.0699.60557-.2942.91715-.2427.33708-.6428.58285-1.2058.58285-.2158 0-.4077-.03612-.576-.09966z"
                fill="#212121"
              />
            </svg>
          </Icon>
        </OnTitle>
        <TitleUnder>Animals Are Another Family</TitleUnder>
      </TitleContainer>
      <Btn name="logIn">LOGIN</Btn>
      <Btn name="signUp">SIGN UP</Btn>
    </Container>
  );
}

export default LogInPage;
