import styled from "styled-components";

export const SmpMainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px;
  width: 1300px;
  margin-top: 60px;
  margin-right: 100px;
  padding: 0 40px 0 40px;
  align-content: center;
`;
export const Bundle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.1);
`;
