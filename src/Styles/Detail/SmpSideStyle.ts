import styled from "styled-components";

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: justify;
  width: 250px;
  border-color: ${(props) => props.theme.color};
`;
export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.color};
  width: 150px;
  height: 50px;
  border: 0;
  margin-top: 20px;
  border-bottom: 1px solid;
`;
export const Category = styled.span`
  margin: 10px 0px 0px 0px;
  width: 150px;
  display: flex;
  color: ${(props) => props.theme.color};
  flex-direction: column;
  text-align: justify;
`;
export const CategoryBtn = styled.button`
  border: 0;
  font-size: 23px;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;
export const CategoryUl = styled.ul`
  color: ${(props) => props.theme.color2};
  font-weight: lighter;
  display: flex;
  flex-direction: column;
  font-size: 15px;
`;
export const CategoryLi = styled.li<{ menuOn: boolean }>`
  @keyframes listOnAni {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes listOffAni {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(-10px);
    }
  }
  margin-bottom: 20px;
  animation: ${(props) =>
    props.menuOn ? `listOffAni 0.5s forwards` : `listOnAni 0.5s forwards`};
  transition: 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color4};
  }
`;
