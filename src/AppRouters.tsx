import { Route, Routes, BrowserRouter } from "react-router-dom";
import LogInHomePage from "./MAINPAGES/PGLogInHome";
import LogInPage from "./COMPONENTS/LogIn/VWLogIn";
import SignUpPage from "./COMPONENTS/LogIn/VWSignUp";
import HomePage from "./MAINPAGES/PGHomeMain";
import FindHomePage from "./MAINPAGES/Detail/PGFindHome";

function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginHome" element={<LogInHomePage />} />
        <Route path="/loginHome/login" element={<LogInPage />} />
        <Route path="/loginHome/signUp" element={<SignUpPage />} />
        <Route path="/find" element={<FindHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
