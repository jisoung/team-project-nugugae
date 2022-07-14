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
  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <S.Container>
      <TitleLogo />
      <Link to="/loginHome">
        <S.Exit>&larr;</S.Exit>
      </Link>
      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          {...register("id", {
            required: {
              value: true,
              message: "Your Id is required",
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
      </S.FormContainer>
      <S.SubmitBtn style={{ animationDelay: "0.3s" }}>Login</S.SubmitBtn>
    </S.Container>
  );
}

export default LogInPage;
