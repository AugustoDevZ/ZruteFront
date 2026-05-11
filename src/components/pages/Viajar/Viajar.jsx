import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import LoadMapa from '../../../hooks/LoadMapa';
import { useUbicacionStore } from "../../../store/useUbicacionStore";
import { routeSearchService } from "../../../Services/ruteService"
import { VerificarTokenService } from "../../../Services/authService";

export const Viajar = () => {

  const isAuth = VerificarTokenService();
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  /*-----------------------------------------
    destructuring de un hook, reotrna el valor actual del estado y
    una función para actualizarlo
 -----------------------------------------*/

  const [destino, setDestino] = useState("");
  const ubicacion = useUbicacionStore((state) => state.ubicacion);


  const handleRouteSearch = async () => {

    console.log("posicion de usuario:", ubicacion)
    console.log("Destino de usuario:", destino)

    const resultadoRuta = await routeSearchService(ubicacion, destino);

    console.log("Destino de usuario:", resultadoRuta)
  };



  return (
    <div className='mapa'>
      <div className='buscador-content'>
        <input className='buscador-destino'
          type='text'
          placeholder='Chan Chan'
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
        />
        <div className='login-buttons'>
          <button onClick={handleRouteSearch}>Buscar ruta más cercana de buses</button>
        </div>
      </div>
      <LoadMapa className='viajar-content'/>

    </div>
  )
}



