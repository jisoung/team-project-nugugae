import styled from "styled-components";
import { useForm } from "react-hook-form";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const Exit = styled.button`
  position: absolute;
  border: 0px solid;
  left: 0px;
  top: 0px;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0);
  color: black;
  cursor: pointer;
  transition: 0.3s ease-in;
  &:hover {
    color: ${(props) => props.theme.color3};
  }
`;
=======

>>>>>>> 854fe0e2f4a6dd8ec7513e24e29ddd6b3f6c5bb5
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
<<<<<<< HEAD
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  color: white;
  font-size: larger;
  border: 0px solid;
  background-color: ${(props) => props.theme.color2};
  border-radius: 30px;
  outline: none;
  width: 500px;
  height: 50px;
  padding: 0px 0px 0px 30px;
  margin: 0px 0px 20px 0px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
`;
function LogInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Container>
      <Link to="/">
        <Exit>&larr;</Exit>
      </Link>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("id", { required: true })}
          placeholder="please write id..."
        ></Input>
        <Input
          {...register("password", { required: true })}
          placeholder="please write password..."
          type="password"
        ></Input>
      </FormContainer>
=======
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
>>>>>>> 854fe0e2f4a6dd8ec7513e24e29ddd6b3f6c5bb5
    </Container>
  );
}

export default LogInPage;
