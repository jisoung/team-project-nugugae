import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TitleLogo from "./titleLogo";
import * as S from "../../STYLES/Login/Components/STLLogin";
import axios from "axios";

function LogInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (props: any) => {
    const data = JSON.stringify({
      email: `${props.email}`,
      pw: `${props.password}`,
    });
    const config = {
      method: "post",
      url: "http://192.168.137.232:8080/api/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(errors);
  return (
    <S.Container>
      <TitleLogo />
      <Link to="/loginHome">
        <S.Exit>&larr;</S.Exit>
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <S.SubmitBtn style={{ animationDelay: "0.3s" }}>Login</S.SubmitBtn>
      </form>
    </S.Container>
  );
}

export default LogInPage;
