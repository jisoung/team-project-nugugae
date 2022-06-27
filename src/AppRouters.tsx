import { Route, Routes, BrowserRouter } from "react-router-dom";
import LogInHomePage from "./Routes/LogIn/LogInHomePage";
import LogInPage from "./Routes/LogIn/LogInPage";
import SignUpPage from "./Routes/LogIn/SignUpPage";

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
