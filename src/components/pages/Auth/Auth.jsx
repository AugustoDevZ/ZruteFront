import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import { authenticateUserService, VerificarTokenService, registerUserService } from '../../../Services/authService';
import "./Auth.css"
import Button from '../../ui/ButtonCommon/ButtonCommon.jsx';
import { useNavigate } from "react-router-dom";

export const Auth = ({ textOptionButton, textOptionAuth, titleAuth, type = 1 }) => {

  const isAuth = VerificarTokenService();
  if (isAuth) {
    return <Navigate to="/viajar" />;
  }

  /*-----------------------------------------
      destructuring de un hook, reotrna el valor actual del estado y
      una función para actualizarlo
   -----------------------------------------*/

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [infoAuth, setInfoAuth] = useState("")
  const [cooldown, setCooldown] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {

    switch (linkOption) {
      case "/login":
        if (!email || !password) {
          setInfoAuth("Ingresa todos los datos para registrar")
          return;
        }

        try {

          const res = await registerUserService(email, password);
          if (!res) {
            console.log("LOGIN NULL:", res);
            setInfoAuth("Registro fallido")
            return;
          }

          console.log("LOGIN OK:", localStorage.getItem("token"));

        } catch (error) {
          console.log("ERROR:", error.response?.data);
        }

      case "/register":
        if (!email || !password) {
          setInfoAuth("Ingresa todos los datos para proceder")
          return;
        }

        try {

          const res = await authenticateUserService(email, password);
          if (!res || res == null) {
            console.log("LOGIN NULL:", res);
            setInfoAuth("Usuario o contraseñas incorrectos")
            return;
          }

          console.log("LOGIN OK:", localStorage.getItem("token"));

        } catch (error) {
          console.log("ERROR:", error.response?.data);
        }


    }

    
    navigate("/viajar");
  };


  const linkOption =
    type === 1
      ? "/register"
      : "/login";



  return (
    <div className='login' >

      <div className='login-content'>

        <div className='login-logo'>
          <svg width="54" height="54" viewBox="0 0 20 35" className="icon">
            <path
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.45,7.54C5.98,7.54,20.27,7.4,20.27,7.4C20.84,7.39,21.31,7.88,21.37,8.51L21.39,9.5C21.39,10.07,21.16,10.64,20.76,11.02L9.44,21.07L20.2,21.1L21.4,23.1C21.4,23.78,20.66,24.13,20.07,24.13L6.92,24.3C6.17,24.29,5.58,23.59,5.58,22.75L5.58,21.45C5.58,20.45,5.99,19.51,6.7,18.93L16.34,10.89L5.72,10.89C5.54,10.89,5.37,10.82,5.23,10.72L4.98,10.54C4.78,10.37,4.61,10.12,4.54,9.84L4.51,9.65C4.43,9.36,4.43,9.05,4.47,8.76L4.54,8.46C4.61,8.16,4.8,7.92,5.04,7.79z M22.1,23.4L19.7,19.2C19.34,18.46,19.05,17.44,19.4,16.7L19.6,16C19.9,15.52,20.52,14.94,21.08,14.85L21.7,14.74C22.23,14.65,22.77,14.66,23.29,14.78L23.55,14.84C24.52,15.06,24.96,15.06,25.3,16C25.3,16.01,25.64,16.7,25.64,16.71L25.64,16.71C25.8,17.14,25.55,18.61,25.3,19z"
            />
          </svg>
        </div>

        <h2 className='tab-h3-two'>{titleAuth}</h2>
        <h4 className='auth-info'>{infoAuth}</h4>
        <div className='input-gmail'>
          <i className="fa-solid fa-at"></i>
          <input



            type='text'
            placeholder='example@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}



          />
        </div>
        <div className='input-gmail'>
          <i className="fa-solid fa-lock"></i>
          <input


            type='password'
            placeholder='contraseña'
            value={password}
            onChange={(e) => setPassword(e.target.value)}



          />
        </div>
        <Button action={handleLogin} text={textOptionButton}></Button>
        <div className='login-oteroption'>
          <Link to={linkOption} onClick={() => setInfoAuth("")}>{textOptionAuth}</Link>
        </div>
      </div>

    </div>
  )
}


/* <input type="text" />
    Types:
      - password
      - email
      - number
      - date (fecha)
      - time (hora)
      - file
      - search (igual que txt pero optimizado para busquedas)
      - url
      - "color"
      - <input type="button" value="Click" />

*/