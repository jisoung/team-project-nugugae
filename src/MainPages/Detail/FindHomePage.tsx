import styled from "styled-components";
import FindNavView from "../../Components/Detail/Find/FindNavView";

const FindConatiner = styled.div`
  display: flex;
  flex-direction: column;
`;
function FindHomePage() {
  return (
    <FindConatiner>
      <FindNavView />
    </FindConatiner>
  );
}

export default FindHomePage;
