import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TitleLogo from "./titleLogo";
import { useState } from "react";
import axios from "axios";
interface IForm {
  id: string;
  password: string;
  password2: string;
  name: string;
  email: string;
  auth: number;
  authing: boolean;
}
interface IAuthInput {
  isAuthOn: boolean;
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
  @keyframes initAni {
    0% {
      transform: translateX(-40px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  animation: initAni 0.3s forwards;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  opacity: 0;
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
  @keyframes initAniBtn {
    0% {
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  opacity: 0;
  animation: initAniBtn 0.3s forwards;
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
  opacity: 0;
  animation: initAni 0.3s forwards;
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
const AuthInput = styled.input<IAuthInput>`
  @keyframes authInputAni {
    0% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  animation: ${(props) => props.isAuthOn && "authInputAni 0.5s forwards"};
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
  margin: 0px 0px 30px 0px;
  &::placeholder {
    color: #ffffff7e;
  }
`;

function SignUpPage() {
  const [isAuthOn, setIsAuthOn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const {
    register: authRegister,
    handleSubmit: authHandleSubmit,
    formState: { errors: authErrors },
    setError: authSetError,
  } = useForm();
  const onSubmit = (data: IForm) => {
    console.log(data);
    if (data.password !== data.password2) {
      setError(
        "password2",
        { message: "password is different" },
        { shouldFocus: true }
      );
    }
    if (data.authing) {
      setIsAuthOn(true);
    } else {
      axios.post<IAuthInput>("/api/auth/email", {});
    }
  };
  const authSumbit = (event: any) => {
    console.log("auth");
  };
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
          style={{ animationDelay: "0.15s" }}
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
          style={{ animationDelay: "0.3s" }}
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
          style={{ animationDelay: "0.45s" }}
        ></Input>
        <ErrorModal>{errors.password2?.message}</ErrorModal>
        <span>
          <Input
            {...register("email", {
              required: {
                value: true,
                message: "Your Id is required",
              },
            })}
            placeholder="please write your phone number..."
            style={{ width: "350px", animationDelay: "0.6s" }}
            type="email"
          ></Input>
          <form onSubmit={authHandleSubmit(authSumbit)}>
            <AuthBtn
              {...authRegister("authing")}
              style={{ animationDelay: "0.75s" }}
            >
              인증
            </AuthBtn>
          </form>
        </span>
        <ErrorModal>{errors.email?.message}</ErrorModal>
        {isAuthOn && (
          <AuthInput
            isAuthOn={isAuthOn}
            {...register("auth", {
              required: {
                value: true,
                message: "The authentication code is require.",
              },
            })}
            placeholder="please write your The authentication code..."
            type="number"
          />
        )}
        <SubmitBtn style={{ animationDelay: "1s" }}>Sign Up</SubmitBtn>
      </FormContainer>
    </Container>
  );
}

export default SignUpPage;
