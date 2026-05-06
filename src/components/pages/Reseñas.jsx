import React from 'react'

export const Reseñas = () => {
  return (
    <div>Reseñas</div>
  )
}


 /*

  ----------------------------------
    aqui consumes {useNavigate } from "react-router-dom"; para asignarlo como campo y 
    usarlo en las funciones de dentro.
  ----------------------------------

  const navigate = useNavigate();

  const AccederVerificar = () => {
    console.log("página renderizada");
    if (!VerificarToken) {
      navigate("/login");
    }
  }

  ----------------------------------
    gente este useEffect es apra cargar todo lo que tenga dentro cuando renderiza una página
     del react sol oen front recomendado. import React, { useEffect } from 'react';
  ----------------------------------
  useEffect(() => {
    AccederVerificar();
  }, []);

*/