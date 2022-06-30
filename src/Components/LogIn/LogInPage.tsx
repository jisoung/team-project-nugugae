import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TitleLogo from "./btns/titleLogo";

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
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  color: ${(props) => props.theme.color4};
  font-size: larger;
  border: 0px solid;
  background-color: ${(props) => props.theme.color2};
  border-radius: 30px;
  outline: none;
  width: 500px;
  height: 50px;
  padding: 0px 0px 0px 30px;
  margin: 20px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.3);
`;
const Text = styled.p`
  cursor: pointer;
  font-size: 15px;
  font-weight: 200;
  margin-bottom: 10px;
  color: ${(props) => props.theme.color4};
  transition: 0.2s ease-in;
  &:hover {
    color: ${(props) => props.theme.color2};
  }
`;
const SubmitBtn = styled.button`
  background-color: ${(props) => props.theme.color4};
  width: 200px;
  height: 50px;
  border: 0;
  color: ${(props) => props.theme.color};
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0 0 0;
  border-radius: 5px;
  box-shadow: 0px 2px 2px 2px rgba(176, 155, 133, 0.3);
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.3);
  }
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
  console.log(errors);
  return (
    <Container>
      <TitleLogo />
      <Link to="/">
        <Exit>&larr;</Exit>
      </Link>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("id", {
            required: {
              value: true,
              message: "Your Id is required",
            },
          })}
          placeholder="please write id..."
        ></Input>
        <Input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Your Password is required",
            },
          })}
          placeholder="please write password..."
        ></Input>
      </FormContainer>
      <Text>forgot ID?</Text>
      <Text>forgot password?</Text>
      <Link to="/home">
        <SubmitBtn>Login</SubmitBtn>
      </Link>
    </Container>
  );
}

export default LogInPage;
