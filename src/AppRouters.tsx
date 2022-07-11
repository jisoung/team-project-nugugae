import { Route, Routes, BrowserRouter } from "react-router-dom";
import LogInHomePage from "./MainPages/PGLogInHome";
import LogInPage from "./Components/LogIn/VWLogIn";
import SignUpPage from "./Components/LogIn/VWSignUp";
import HomePage from "./MainPages/PGHomeMain";
import FindHomePage from "./MainPages/Detail/PGFindHome";

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
