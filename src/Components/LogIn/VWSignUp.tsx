import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import TitleLogo from "./titleLogo";
import { FormEvent, useState } from "react";
import axios from "axios";
import * as S from "../../STYLES/Login/Components/STLSignUp";
import { useSetRecoilState } from "recoil";
import { tokenState } from "../../_LAYOUT/atom";

interface IForm {
  id: string;
  password: string;
  password2: string;
  name: string;
}

interface IAuth {
  email?: string;
}
function VWSignUp() {
  const [isAuthOn, setIsAuthOn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [authNum, setAuthNum] = useState<String>();
  const [correctAuth, setCorrectAuth] = useState(false);
  const setTokenAtom = useSetRecoilState(tokenState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const navigate = useNavigate();
  const { register: authRegister, handleSubmit: authHandleSubmit } = useForm();
  const onSubmit = async (data: IForm) => {
    if (data.password !== data.password2) {
      setError(
        "password2",
        { message: "password is different" },
        { shouldFocus: true }
      );
    }
    let jsonData = JSON.stringify({
      email: `${email}`,
      emailCheckCode: `${authNum}`,
      pw: `${data.password}`,
      name: `${data.name}`,
      userType: "USER",
    });
    let config = {
      method: "post",
      url: "https://967d-222-118-155-166.jp.ngrok.io/api/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      maxRedirects: 0,
      data: jsonData,
    };
    if (!isSignUp) {
      axios(config)
        .then((response) => {
          setIsSignUp(true);
          setTokenAtom(response.data["accessToken"]);
          navigate("/loginHome", { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const authSumbit = async (data: IAuth) => {
    const config = {
      method: "post",
      url: `https://967d-222-118-155-166.jp.ngrok.io/api/auth/email?email=${data.email}`,
    };
    if (!correctAuth) {
      await axios(config)
        .then((Response: any) => {
          console.log(Response);
          setCorrectAuth(true);
        })
        .catch((error) => {
          setCorrectAuth(false);
          console.log(error);
        })
        .finally(() => {
          setIsAuthOn(true);
          setEmail(data.email + "");
        });
    }
  };
  const AuthOnChagne = (event: FormEvent<HTMLInputElement>) => {
    setAuthNum(event.currentTarget.value);
  };
  return (
    <S.Container>
      <TitleLogo />
      <Link to="/loginHome">
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
          style={{ marginTop: "20px" }}
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
            <S.AuthBtn {...authRegister} style={{ animationDelay: "0.75s" }}>
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
            onChange={AuthOnChagne}
            type="number"
          />
        )}
        <S.SubmitBtn style={{ animationDelay: "1s" }}>Sign Up</S.SubmitBtn>
      </S.FormContainer>
    </S.Container>
  );
}

export default VWSignUp;
