import styled from "styled-components";

interface IModal {
  whatError?: any;
}

interface IModalProps {
  isRequired: boolean;
}

const Modal = styled.div<IModalProps>`
  @keyframes modal-show {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes modal-down {
    0% {
      transform: translateY(0px);
      opacity: 1;
    }
    100% {
      transform: translateY(10px);
      opacity: 0;
    }
  }
  position: absolute;
  border: 0px solid black;
  left: 45vw;
  top: 60vh;
  width: 300px;
  animation: ${(props) =>
    props.isRequired ? "modal-show 0.5s" : "modal-down 0.5s forwards"};
`;

function LoginModal({ whatError }: IModal) {
  return (
    <>
      {whatError === "" ? (
        <Modal isRequired={false}>Correct</Modal>
      ) : (
        <Modal isRequired={true}>{whatError}</Modal>
      )}
    </>
  );
}

export default LoginModal;
