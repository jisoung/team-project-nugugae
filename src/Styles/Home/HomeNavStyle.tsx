import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 15vh;
`;
export const TitleLogoContainer = styled.div`
  margin: 0px 80px 0px 150px;
`;
export const CtgTexts = styled.div`
  display: flex;
  margin-right: auto;
`;
export const CtgText = styled.button`
  cursor: pointer;
  font-family: Inria Sans;
  font-weight: 200;
  margin: 0px 20px 0px 0px;
  border: 0;
  color: #ffffffb1;
  background-color: rgba(0, 0, 0, 0);
  transition: 0.2s ease-in;
  &:hover {
    color: white;
  }
`;
export const Search = styled.input`
  font-family: Inria Serif;
  font-size: 18px;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  height: 30px;
  outline: none;
  width: 300px;
  padding-left: 20px;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0);
`;
