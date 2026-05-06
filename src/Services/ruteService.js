import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
import zruteApi from "../api/zruteApi";

/*-----------------------------------------
    Método o funcion para obtener la ruta de bus 
-----------------------------------------*/

export const routeSearchService = async (ubicacion, textDestino) => {
  const res = await api.post("/zrute/rutas", {
      Ubication: ubicacion,
      Destino: textDestino
    }
  );
  return res.data;
};


//Google Places API
//Nominatim + BD propia