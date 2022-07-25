import { Route, Routes, BrowserRouter } from "react-router-dom";
import LogInHomePage from "../MAINPAGES/PGLogInHome";
import LogInPage from "../COMPONENTS/LogIn/VWLogIn";
import SignUpPage from "../COMPONENTS/LogIn/VWSignUp";
import HomePage from "../MAINPAGES/PGHomeMain";
import PGFindHome from "../MAINPAGES/Detail/PGFindHome";
import PGAdoptHome from "../MAINPAGES/Detail/PGAdoptHome";
import PGShopHome from "../MAINPAGES/Detail/PGShopHome";

function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/loginHome" element={<LogInHomePage />} />
        <Route path="/loginHome/login" element={<LogInPage />} />
        <Route path="/loginHome/signUp" element={<SignUpPage />} />
        <Route path="/find" element={<PGFindHome />} />
        <Route path="/adopt" element={<PGAdoptHome />} />
        <Route path="/shop" element={<PGShopHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
