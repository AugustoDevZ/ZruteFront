import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { VerificarTokenService } from '../../Services/authService';
import { useNavigateViajar } from '../../hooks/useNavigateViajar'
import '../../styles/inicio_page.css'

import Subtitle from '../ui/subtitleStyle_v1'
import Button from '../ui/buttonStyle_v1';
import Line from '../ui/lineStyle_v1';

export const Inicio = () => {

  const { navigateViajar } = useNavigateViajar();

  return (
    <div>
      <section className='inicio' id='start'>

        <Subtitle text="Disponible solo en Trujillo" />

        <h3 className='inicio-title'>RUTAS REALES Y SEGURAS</h3>
        <h3 className='inicio-text'>describan aqui el asunto de la app en 2 lineas</h3>

        <div className='inicio-content-display'>
          <Button text="Planificar Ruta" action={navigateViajar} />
          <Button text="Iniciar Sesion" action={navigateViajar} />
        </div>

      </section >
      <Line
        textContent="Descubre lugares increíbles del distrito de Trujillo viajando con nuestra app de mejores rutas."
        oneTitle="Las mejores"
        twoTitle="Rutas"
      />
      <section className='center inicio-description' id='description'>
        <img src="https://vycocode.com/img/map.webp" alt="" />
      </section>


    </div>
  )
}


//<Line textContent = "aaa" oneTitle="sdsd" twoTitle="asdsad"/>