/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import appFirebase from "../../credenciales";
import { useContextHook } from "../../context/context";

const auth = getAuth(appFirebase);

export const LoginPage = () => {
  const [login, setLogin] = useState(false);

  const { setState, user } = useContextHook();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = handleSubmit(funAutentication);

  async function funAutentication() {
    if (!login) {
      try {
        const {
          user: { accesToken, email },
        } = await signInWithEmailAndPassword(
          auth,
          watch("email"),
          watch("password")
        );

        const [name, ...rest] = email.split("@");
        
        
        localStorage.setItem(
          "auth",
          JSON.stringify({ accesToken, email: name })
        );
        setState({ accesToken, name });
        navigate("/dash");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <h1>Iniciar sesión</h1>

        {/* <div className='input-group'>
            <input type="text" name='name' id='name' value={name} onChange={onInputChange} required autoComplete='off' />
            <label htmlFor="name">Nombre</label>
          </div> */}

        <div className="input-group">
          <div>
            <label htmlFor="email">Email</label>

            <input
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email es requerido",
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "el correo no valido tener formato xxxxxx@xxxx.xxx",
                },
              })}
            />
          </div>
          {errors.email && (
            <span className="error">{errors.email.message} </span>
          )}
        </div>

        <div className={`input-group ${errors.email ? "move-to-bottom" : ""}`}>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input
              className="imp"
              type="password"
              name="password"
              autoComplete="on"
              {...register("password", {
                required: {
                  value: true,
                  message: "password es requerido",
                },
                minLength: {
                  value: 8,
                  message: "longitud minima 8 caracteres",
                },
                // ,
                // pattern:{
                //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()._+\-={}[\]|:;"'<>,?/]).{8,}$/,
                //   message: 'El password debe contener caracteres especiales letras MAY y min'
                // }
              })}
            />
          </div>
          {errors.password && (
            <span className="error"> {errors.password.message} </span>
          )}
        </div>

        <button
          type="submit"
          className={errors.password ? "move-to-bottom" : ""}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
