import { Route, Routes } from "react-router-dom";


import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { DashPage } from "../pages/dash/dash";
import { Navbar } from "../navbar";



export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dash" element={<DashPage />} />
      </Route>
    </Routes>
  );
};
