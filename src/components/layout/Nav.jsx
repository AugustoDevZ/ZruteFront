import React from 'react'
import { Link } from 'react-router-dom'
export const Nav = () => {


  /*
  <h2 className='general-title'>PERFIL</h2>
        <ul className='general'>
          <li><NavLink to=""><i className="fi fi-br-hand-wave"></i>Editar perfil</NavLink></li>
        </ul>
        <h2 className='general-title'>GENERAL</h2>
        <ul className='general'>
          <li><NavLink to=""><i className="fi fi-br-hand-wave"></i>Bienvenidas y Despedidas</NavLink></li>
          <li><NavLink to=""><i className="fi fi-br-hand-wave"></i>Tickets Inteligente</NavLink></li>
          <li><NavLink to=""><i className="fi fi-br-hand-wave"></i>Chatea por ZReddix</NavLink></li>
          <li><NavLink to=""><i className="fi fi-br-hand-wave"></i>Crear embeds</NavLink></li>
          <li><NavLink to=""><i className="fi fi-br-hand-wave"></i>Editar Hilos</NavLink></li>
        </ul>
  
  */

  return (
    <div className='navar'>


      <div className='content-colum'>
        <div className='content-row  aditional-margin-top'>
          <div className='navar-logo content-row'>
            <svg width="54" height="54" viewBox="0 0 27 32" className="icon">
              <path
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.45,7.54C5.98,7.54,20.27,7.4,20.27,7.4C20.84,7.39,21.31,7.88,21.37,8.51L21.39,9.5C21.39,10.07,21.16,10.64,20.76,11.02L9.44,21.07L20.2,21.1L21.4,23.1C21.4,23.78,20.66,24.13,20.07,24.13L6.92,24.3C6.17,24.29,5.58,23.59,5.58,22.75L5.58,21.45C5.58,20.45,5.99,19.51,6.7,18.93L16.34,10.89L5.72,10.89C5.54,10.89,5.37,10.82,5.23,10.72L4.98,10.54C4.78,10.37,4.61,10.12,4.54,9.84L4.51,9.65C4.43,9.36,4.43,9.05,4.47,8.76L4.54,8.46C4.61,8.16,4.8,7.92,5.04,7.79z M22.1,23.4L19.7,19.2C19.34,18.46,19.05,17.44,19.4,16.7L19.6,16C19.9,15.52,20.52,14.94,21.08,14.85L21.7,14.74C22.23,14.65,22.77,14.66,23.29,14.78L23.55,14.84C24.52,15.06,24.96,15.06,25.3,16C25.3,16.01,25.64,16.7,25.64,16.71L25.64,16.71C25.8,17.14,25.55,18.61,25.3,19z"
              />
            </svg>

          </div>
          <h1 className='navar-logo-title'>rute✨</h1>
        </div>
        <div className='content-linea2'>
          <div className="linea"></div>
        </div>
      </div>


      <ul className='navar-case'>
        <li className='navar-option'>
          <Link to="/viajar">
            <i className="fa-regular fa-map" />
            <h3>NUEVA RUTA</h3>
          </Link>
        </li>
        <li className='navar-option'>
          <Link to="/historial">
            <i className="fa-solid fa-clock-rotate-left"></i>
            <h3>HISTORIAL</h3>
          </Link>
        </li>
        <li className='navar-option'>
          <Link to="/resenas">
            <i className="fa-solid fa-book-bookmark"></i>
            <h3>RESEÑAS</h3>
          </Link>
        </li>

      </ul>



    </div>
  )
}
