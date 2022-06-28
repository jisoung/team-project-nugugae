import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LoginModal from "../../Modal/LoginModal";

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
  console.log(errors);
  return (
    <Container>
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
          {...register("password", {
            required: {
              value: true,
              message: "Your Password is required",
            },
          })}
        ></Input>
        {errors.id?.message ? (
          errors.id.message.map()
        ) : (
          <LoginModal whatError="" />
        )}
      </FormContainer>
    </Container>
  );
}

export default LogInPage;
