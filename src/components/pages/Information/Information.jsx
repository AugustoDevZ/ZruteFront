import React from 'react'
import "./Information.css"
import Subtitle from "../../ui/Subtitle/Subtitle"
//controles



export const Information = () => {
  return (

    <div className='information-content' >

      <div className='information-text'>
        <div className='information-subtitle'>
          <Subtitle text="Una solucion tecnológica para los turistas"/>
          </div>
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
          soluta et nesciunt eaque laudantium delectus suscipit assumenda
          rem! Molestias quibusdam velit nam eius maiores. Iure quia laborum
          suscipit consequatur eaque.
        </h3>
      </div>

      <img className='information-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdk7Q_WEgMi9Tgn0P9cBLdJj4OSC-CfBPZvQ&s" alt="" />

    </div>


  )
}

/*

display flex css:
  display: flex;


*/
























