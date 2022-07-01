import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TitleLogo from "./btns/titleLogo";

interface IForm {
  id: string;
  password: string;
  password2: string;
  name: string;
  phNumber: string;
}
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
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  color: ${(props) => props.theme.color};
  font-size: larger;
  border: 0px solid;
  background-color: ${(props) => props.theme.color3};
  border-radius: 30px;
  outline: none;
  width: 400px;
  height: 50px;
  padding: 0px 0px 0px 30px;
  margin: 0px 0px 0px 0px;
  &::placeholder {
    color: #ffffff7e;
  }
`;
const SubmitBtn = styled.button`
  position: relative;
  left: 50px;
  background-color: ${(props) => props.theme.color2};
  width: 300px;
  height: 50px;
  border: 0;
  color: white;
  font-size: 15px;
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
const AuthBtn = styled.button`
  font-weight: bold;
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: 0;
  box-shadow: 0px 2px 2px 2px rgba(176, 155, 133, 0.3);
  background-color: ${(props) => props.theme.color3};
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 0px 0px rgba(176, 155, 133, 0.3);
  }
`;
const ErrorModal = styled.span`
  margin: 5px 0px 5px 40px;
  font-size: 15px;
  color: #b0b0b07d;
`;

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log(data);
    if (data.password !== data.password2) {
      setError(
        "password2",
        { message: "password is different" },
        { shouldFocus: true }
      );
    }
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
          {...register("name", {
            required: {
              value: true,
              message: "Your Id is required",
            },
            minLength: {
              value: 2,
              message: "Your Name is short",
            },
          })}
          placeholder="please write name..."
          style={{ width: "250px", marginTop: "20px" }}
        ></Input>
        <ErrorModal>{errors.name?.message}</ErrorModal>
        <Input
          {...register("id", {
            required: {
              value: true,
              message: "Your Id is required",
            },
            minLength: {
              value: 5,
              message: "Your Id is short",
            },
          })}
          placeholder="please write id..."
        ></Input>
        <ErrorModal>{errors.id?.message}</ErrorModal>
        <Input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Your Password is required",
            },
            minLength: {
              value: 8,
              message: "Your password is short",
            },
          })}
          placeholder="please write password..."
        ></Input>
        <ErrorModal>{errors.password?.message}</ErrorModal>
        <Input
          type="password"
          {...register("password2", {
            required: {
              value: true,
              message: "Your Password is required",
            },
          })}
          placeholder="Please write the same password"
        ></Input>
        <ErrorModal>{errors.password2?.message}</ErrorModal>
        <span>
          <Input
            {...register("phNumber", {
              required: {
                value: true,
                message: "Your Id is required",
              },
            })}
            placeholder="please write your phone number..."
            style={{ width: "350px" }}
            type="number"
          ></Input>
          <AuthBtn>인증</AuthBtn>
        </span>
        <ErrorModal>{errors.phNumber?.message}</ErrorModal>
        <SubmitBtn>Sign Up</SubmitBtn>
      </FormContainer>
    </Container>
  );
}

export default SignUpPage;
