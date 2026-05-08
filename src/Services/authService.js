import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import zruteApi from "../api/zruteApi";

/*-----------------------------------------
    Método o funcion para logear a usuario 
-----------------------------------------*/

export const authenticateUserService = async (inputEmail, inputPassword) => {

  try {
    const res = await zruteApi.post("/login",
      {
        email: inputEmail,
        password: inputPassword
      }
    );

    if (!res.data?.token) {
      return null;
    }

    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    return null;
  }
};


export const registerUserService = async (inputEmail, inputPassword) => {

  try {
    const res = await zruteApi.post("/register",
      {
        name: "User",
        img: "",
        theme: "default",
        lang: "es-ES",
        email: inputEmail,
        password: inputPassword
      }
    );

    

    if (!res.data?.token) {
      return null;
    }

    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (error) {
    console.log("REGISTER ERROR:", error.response?.data);
    return null;
  }
};

/*-----------------------------------------
    Método o funcion para verificar token cuando tengamos JWT
-----------------------------------------*/

export const VerificarTokenService = () => {

  const token = localStorage.getItem("token");
  return !!token;
  //return true;

}



export const exitAuthService = () => {
  localStorage.removeItem("token");
  
}
