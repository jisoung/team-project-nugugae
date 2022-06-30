import { Route, Routes, BrowserRouter } from "react-router-dom";
import LogInHomePage from "./MainPages/LogInHomePage";
import LogInPage from "./Components/LogIn/LogInPage";
import SignUpPage from "./Components/LogIn/SignUpPage";
import HomePage from "./MainPages/HomeMainPage";

function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInHomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
