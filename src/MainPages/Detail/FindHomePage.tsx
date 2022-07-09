import styled from "styled-components";
import FindNavView from "../../Components/Detail/Find/FindNavView";
import FindSideView from "../../Components/Detail/Find/FindSideView";

const FindConatiner = styled.div`
  display: flex;
  flex-direction: column;
`;
function FindHomePage() {
  return (
    <FindConatiner>
      <FindNavView />
      <FindSideView />
    </FindConatiner>
  );
}

export default FindHomePage;
