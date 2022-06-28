import styled from "styled-components";

interface IModal {
  whatError?: any;
}

const Modal = styled.div`
  @keyframes modal-show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  border: 1px solid black;
  width: 300px;
  animation: modal-show 0.5s;
`;

function LoginModal({ whatError }: IModal) {
  return <>{whatError.type === "required" ? <Modal></Modal> : null}</>;
}

export default LoginModal;
