import { Route, Routes, BrowserRouter } from "react-router-dom";
import LogInPage from "./Routes/LogIn/LogInPage";

function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters;
