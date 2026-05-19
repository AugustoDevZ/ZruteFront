import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import zruteApi from "../api/zruteApi";

/*-----------------------------------------
    Método o funcion para obtener la ruta de bus 
-----------------------------------------*/

export const routeSearchService = async (ubicacion, textDestino) => {

  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }


  const res = await zruteApi.post(
    "/routes/me",
    {
      ubication: ubicacion,
      destino: textDestino
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return res.data;


};


//Google Places API
//Nominatim + BD propia

/*ubication: ubicacion,
      destino: textDestino
    }
  );
  return res.data; */