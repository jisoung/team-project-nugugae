import { Route, Routes, BrowserRouter } from "react-router-dom";
import LogInHomePage from "./MainPages/LogInHomePage";
import LogInPage from "./Components/LogIn/LogInPage";
import SignUpPage from "./Components/LogIn/SignUpPage";
import HomePage from "./MainPages/HomeMainPage";
import FindHomePage from "./MainPages/Detail/FindHomePage";

function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/loginHome" element={<LogInHomePage />} />
        <Route path="/loginHome/login" element={<LogInPage />} />
        <Route path="/loginHome/signUp" element={<SignUpPage />} />
        <Route path="/find" element={<FindHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
