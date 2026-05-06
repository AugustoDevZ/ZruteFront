import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { VerificarTokenService } from '../../Services/authService';
import { useNavigateViajar } from '../../hooks/useNavigateViajar'

export const Inicio = () => {

  const { navigateViajar } = useNavigateViajar();

  return (
    <div>
      <section id='#inicio' >
        <div className='inicio'>
          <h2 className='tab-model'>LAS MEJORES RUTAS</h2>
          <h3 className='tab-h3'>RUTAS REALES Y SEGURAS</h3>
          <h3 className='tab-h3-two'>Planifica tu próximo recorrido ahora</h3>

          <ul className='tab-buttons'>
            <li><a to='#' onClick={ navigateViajar } >Planificar Ruta</a></li>
            <li><a to='#' onClick={ navigateViajar} >Iniciar Sesión</a></li>
          </ul>
        </div>

      </section>

      <section id='#presencia'>
        <div className='content-linea'>
          <div className="linea"></div>
        </div>
        <div className='swich-model'>

          <div className='case1'>
            <h2 className='case-title'>🌎 LAS MEJORES RUTAS</h2>

            <h2 className='case-title2'>Descubre lugares increíbles del distrito de Trujillo viajando con nuestra app de mejores rutas.</h2>
          </div>
          <div className='case1 case2'>
            <img src="https://vycocode.com/img/map.webp" alt="" />
          </div>

        </div>


      </section>


    </div>
  )
}
