import styled from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
const Input = styled.input`
  font-size: larger;
  border: 0px solid;
  border-bottom: 1px solid;
  outline: none;
  width: 500px;
  height: 50px;
`;
function LogInPage() {
  const { register, handleSubmit, formState } = useForm();
  console.log(register);
  return (
    <Container>
      <form>
        <Input></Input>
      </form>
    </Container>
  );
}

export default LogInPage;
