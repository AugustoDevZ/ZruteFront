import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Auth } from '../components/pages/Auth';
import { Viajar } from '../components/pages/Viajar';
import { Reseñas } from '../components/pages/Reseñas';
import { Historial } from '../components/pages/Historial';
import { Configurar } from '../components/pages/Configurar';
import LayoutPublico from '../components/layout/typesLayouts/LayoutPublico';
import LayoutPrivado from '../components/layout/typesLayouts/LayoutPrivado';

import { Footer } from '../components/layout/Footer';
import { Inicio } from '../components/pages/Inicio';
import LayoutAccess from '../components/layout/typesLayouts/LayoutAccess';
import { Information } from '../components/pages/information';


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
            titleAuth="Accede a tu cuenta" />} />
          <Route path="/register" element={<Auth
            textOptionButton="Registrarme"
            textOptionAuth="Ya tengo una cuenta"
            titleAuth="Crea una cuenta" />} />
        </Route>

        <Route element={<LayoutPrivado />}>
          <Route path="/viajar" element={<Viajar />} />
          <Route path="/resenas" element={<Reseñas />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/configuracion" element={<Configurar />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
