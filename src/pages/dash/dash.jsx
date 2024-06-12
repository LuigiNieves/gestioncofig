// eslint-disable-next-line no-unused-vars
import React from "react";

import "./dash.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export const DashPage = () => {
  return (
    <main className="main dash">
      <Toaster />

      <Outlet />
    </main>
  );
};
