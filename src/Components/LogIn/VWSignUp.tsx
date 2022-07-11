import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TitleLogo from "./titleLogo";
import { useState } from "react";
import axios from "axios";
import * as S from "../../STYLES/Login/Components/STLSignUp";

interface IForm {
  id: string;
  password: string;
  password2: string;
  name: string;
}

interface IAuth {
  email?: string;
}
function SignUpPage() {
  const [isAuthOn, setIsAuthOn] = useState(false);
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const { register: authRegister, handleSubmit: authHandleSubmit } = useForm();
  const onSubmit = (data: IForm) => {
    console.log(data);
    if (data.password !== data.password2) {
      setError(
        "password2",
        { message: "password is different" },
        { shouldFocus: true }
      );
    }
    const url = "http://192.168.137.232:9090/api/auth/signup?";
  };
  const authSumbit = async (data: IAuth) => {
    setIsAuthOn(true);
    console.log("auth!");
    const url = "http://192.168.137.232:9090/api/auth/email?";
    await axios
      .post(`${url}email=${data.email}`)
      .then((Response: any) => {
        console.log(Response);
        setEmail(data.email + "");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <S.Container>
      <TitleLogo />
      <Link to="/">
        <S.Exit>&larr;</S.Exit>
      </Link>
      <S.FormContainer as="form" onSubmit={handleSubmit(onSubmit)}>
        <S.Input
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
        ></S.Input>
        <S.ErrorModal>{errors.name?.message}</S.ErrorModal>
        <S.Input
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
        ></S.Input>
        <S.ErrorModal>{errors.id?.message}</S.ErrorModal>
        <S.Input
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
        ></S.Input>
        <S.ErrorModal>{errors.password?.message}</S.ErrorModal>
        <S.Input
          type="password"
          {...register("password2", {
            required: {
              value: true,
              message: "Your Password is required",
            },
          })}
          placeholder="Please write the same password"
          style={{ animationDelay: "0.45s" }}
        ></S.Input>
        <S.ErrorModal>{errors.password2?.message}</S.ErrorModal>
        <span style={{ display: "flex" }}>
          <S.Input
            {...authRegister("email", {
              required: {
                value: true,
                message: "Your Id is required",
              },
            })}
            placeholder="please write your email..."
            style={{ width: "350px", animationDelay: "0.6s" }}
            type="email"
          ></S.Input>
          <form onClick={authHandleSubmit(authSumbit)}>
            <S.AuthBtn
              {...authRegister}
              style={{ animationDelay: "0.75s" }}
              type="submit"
            >
              인증
            </S.AuthBtn>
          </form>
        </span>
        {/* <S.ErrorModal>{errors.email?.message}</S.ErrorModal> */}
        {isAuthOn && (
          <S.AuthInput
            isAuthOn={isAuthOn}
            {...authRegister("auth", {
              required: {
                value: true,
                message: "The authentication code is require.",
              },
            })}
            placeholder="please write your The authentication code..."
            type="number"
          />
        )}
        <S.SubmitBtn style={{ animationDelay: "1s" }}>Sign Up</S.SubmitBtn>
      </S.FormContainer>
    </S.Container>
  );
}

export default SignUpPage;
