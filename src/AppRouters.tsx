import { Route, Routes, BrowserRouter } from "react-router-dom";
import LogInHomePage from "./Components/LogIn/LogInHomePage";
import LogInPage from "./Components/LogIn/LogInPage";
import SignUpPage from "./Components/LogIn/SignUpPage";

function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInHomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
