import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import zruteApi from "../api/zruteApi";

/*-----------------------------------------
    Método o funcion para logear a usuario 
-----------------------------------------*/

export const authenticateUserService = async (inputEmail, inputPassword) => {

  const res = await api.post("/zrute/users/login",
    {
      userEmail: inputEmail,
      userPassword: inputPassword
    }
  );

  return res.data;
};


/*-----------------------------------------
    Método o funcion para verificar token cuando tengamos JWT
-----------------------------------------*/

export const VerificarTokenService = () => {

    const token = sessionStorage.getItem("token");
    
    return !!token;
    //return true;

}


