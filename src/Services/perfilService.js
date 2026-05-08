import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import zruteApi from "../api/zruteApi";
/*-----------------------------------------
    Método o funcion para obtener perfil de usuario 
-----------------------------------------*/

export const PerfilUserService = async () => {


    const token = localStorage.getItem("token");
    if (!token){
        return null;
    }

    const res = await zruteApi.get(
        "/users/me",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
    return res.data;
};

/*{
            headers: {
                Authorization: `Bearer ${token}`
            }
        } */