import styled from "styled-components";

interface ITextProps {
  haveLine: boolean;
}
export const NavContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 60px;
`;
export const CtgTexts = styled.div`
  display: flex;
  margin-left: auto;
`;
export const CtgText = styled.button<ITextProps>`
  height: 30px;
  width: 70px;
  cursor: pointer;
  font-family: Inria Sans;
  font-weight: 200;
  margin: 0px 20px 0px 0px;
  border: 0;
  border-bottom: ${(props) => props.haveLine && "1px solid"};
  color: ${(props) => props.theme.color};
  background-color: rgba(0, 0, 0, 0);
  transition: 0.2s ease-in;
  &:hover {
    color: ${(props) => props.theme.color2};
  }
`;
