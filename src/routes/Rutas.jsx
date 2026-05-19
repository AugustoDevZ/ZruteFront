import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Auth } from '../components/pages/Auth/Auth';
import { Viajar } from '../components/pages/Viajar/Viajar';
import { Reseñas } from '../components/pages/Reviews/Reseñas';
import { Historial } from '../components/pages/Historial/Historial';
import { Configurar } from '../components/pages/Config/Configurar';
import LayoutPublico from '../components/layouts-types/LayoutPublico';
import LayoutPrivado from '../components/layouts-types/LayoutPrivado';
import LayoutAccess from '../components/layouts-types/LayoutAccess';
import { Footer } from '../components/layout/Footer/Footer';
import { Inicio } from '../components/pages/Inicio/Inicio';

import { Information } from '../components/pages/information/Information';


export const Rutas = () => {


  return (
    <BrowserRouter>
      <Routes>


        <Route element={<LayoutPublico />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/information" element={<Information />} />
        </Route>


        <Route element={<LayoutAccess />}>
          <Route path="/login" element={<Auth
            textOptionButton="Acceder"
            textOptionAuth="No tengo una cuenta"
            titleAuth="Accede a tu cuenta"
            type={1}/>} />
          <Route path="/register" element={<Auth
            textOptionButton="Registrarme"
            textOptionAuth="Ya tengo una cuenta"
            titleAuth="Crea una cuenta" 
            type={2}/>} />
        </Route>

        <Route element={<LayoutPrivado />}>
          <Route path="/viajar" element={<Viajar />} />
          <Route path="/reseñas" element={<Reseñas />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/configuracion" element={<Configurar />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
