// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

import "./dash.css";
import { useNavigate } from "react-router-dom";
import { useContextHook } from "../../context/context";
import Conteo from "./conteo/conteo";
import {Toaster} from 'react-hot-toast'

export const DashPage = () => {
  const { email, setState } = useContextHook();
  const [messages, setMessages] = useState([]);

  const [message, setMessage] = useState("");

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

  const addMessage = () => {
    setMessages([...messages, { label: message }]);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleOnKeyDown = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      if (!message) return;
      addMessage();
      setMessage("");
    }
  };

  return (
    <main className="main dash">
      <Toaster/>
      <aside>
        <Conteo lista={messages} />
        <textarea
          value={message}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
          placeholder="Ingresa texto aqui"
        ></textarea>
        <article>
          {messages.map((message, index) => (
            <div key={index}>{message.label}</div>
          ))}
        </article>
      </aside>
    </main>
  );
};
