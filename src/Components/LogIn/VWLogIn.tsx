import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import TitleLogo from "./titleLogo";
import * as S from "../../STYLES/Login/Components/STLLogin";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { tokenState } from "../../atom";

function LogInPage(url: string) {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const setToken = useSetRecoilState(tokenState);
  const onSubmit = ({ email, password }: any) => {
    let data = JSON.stringify({
      email: `${email}`,
      pw: `${password}`,
    });
    let config = {
      method: "post",
      url,
      headers: {
        "Content-Type": "application/json",
      },
      maxRedirects: 0,
      data: data,
    };
    axios(config)
      .then((responese) => {
        console.log("로그인 성공!");
        setToken(responese.data["accessToken"]);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <S.Container>
      <TitleLogo />
      <Link to="/loginHome">
        <S.Exit>&larr;</S.Exit>
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <S.Input
          {...register("email", {
            required: {
              value: true,
              message: "Your Email is required",
            },
          })}
          placeholder="please write id..."
        ></S.Input>
        <S.Input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Your Password is required",
            },
          })}
          placeholder="please write password..."
          style={{ animationDelay: "0.15s" }}
        ></S.Input>
        <S.SubmitBtn style={{ animationDelay: "0.3s" }} type="submit">
          Login
        </S.SubmitBtn>
      </form>
    </S.Container>
  );
}

export default LogInPage;
