// eslint-disable-next-line no-unused-vars
import {useEffect} from "react";

import "./dash.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import { useContextHook } from "../../context/context";




export const DashPage = () => {
  const { email, setState } = useContextHook();

  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      const user = JSON.parse(localStorage.getItem("auth"));

      if (user) {
        setState(user);
        return;
      }

      navigate("/login");
    }
  }, []);

  return (
    <main className="main dash">
      <Toaster />

      <Outlet />
    </main>
  );
};
