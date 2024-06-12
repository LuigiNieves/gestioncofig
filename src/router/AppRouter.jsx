import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { DashPage } from "../pages/dash/dash";
import { Navbar } from "../navbar";
import Conteo from "../pages/dash/conteo/conteo";
import Palindroma from "../pages/dash/palindroma/palindroma";
import ConteoArchivo from "../pages/dash/conteoArchivo/conteoArchivo";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* funcionalidad 1 */}
        <Route path="/dash" element={<DashPage />}>
          <Route path="/dash/conteo" element={<Conteo />} />
          <Route path="/dash/palindroma" element={<Palindroma />} />
          <Route path="/dash/conteoArchivo" element={<ConteoArchivo />} />
        </Route>
      </Route>
    </Routes>
  );
};
