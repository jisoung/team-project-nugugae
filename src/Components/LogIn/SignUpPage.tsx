import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TitleLogo from "./btns/titleLogo";
// import LoginModal from "../../Modal/LoginModal";

interface IForm {
  id?: string;
  password?: string;
  name?: string;
  phNumber?: string;
  auth?: string;
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
  margin: 0px 0px 20px 0px;
  &::placeholder {
    color: #ffffff7e;
  }
`;
const SubmitBtn = styled.button`
  background-color: ${(props) => props.theme.color2};
  width: 150px;
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

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const authSubmit = (data: any) => {
    console.log(data.phoneNumber);
  };
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
        <Input
          {...register("name", {
            required: {
              value: true,
              message: "Your Id is required",
            },
          })}
          placeholder="please write name..."
        ></Input>
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
          <AuthBtn {...register("auth")} onSubmit={handleSubmit(authSubmit)}>
            인증
          </AuthBtn>
        </span>
        {/* {errors.id?.message ? (
          errors.id.message.map()
        ) : (
          <LoginModal whatError="" />
        )} */}
      </FormContainer>
      <SubmitBtn>Sign Up</SubmitBtn>
    </Container>
  );
}

export default SignUpPage;
