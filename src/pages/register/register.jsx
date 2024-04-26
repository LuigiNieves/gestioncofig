/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import appFirebase from "../../credenciales";
import { useContextHook } from "../../context/context";


import "./register.css";

const auth = getAuth(appFirebase);

export const RegisterPage = () => {
  const [registrado, setRegistrado] = useState(false);
  const [existe, setexiste] = useState(false);

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
    if (!registrado) {
      try {
        const {
          user: { accesToken, email },
        } = await createUserWithEmailAndPassword(
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
        navigate("/Login");
      } catch (error) {
        console.log(error);
        setexiste(true)
      }
    }
  }
  

  return (
    <div className="register">
      <form onSubmit={onSubmit}>
        <h1>Registrarse</h1>

        <div className="input-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", {
              required: {
                value: true,
                message: "nombre es requerido",
              },
            })}  
          />
        </div>
      
          {errors.name && (
            <span className="error">{errors.name.message} </span>
          )}

        <div className="input-group">
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
        
        {existe && (
            <span>El correo ya existe </span>
          )}
        

        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
              {...register("password", {
                required: {
                  value: true,
                  message: "password es requerido",
                },
                minLength: {
                  value: 8,
                  message: "longitud minima 8 caracteres",
                },
              
              })}
          />
        </div>

        {errors.password && (
           <span className="error">{errors.password.message} </span>
          )} 

        <button  type="submit"
          className={errors.password ? "move-to-bottom" : ""}
        >
          Registrarse</button>
      </form>
    </div>
  );
};
