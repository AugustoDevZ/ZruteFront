import React from 'react'
import { Link } from 'react-router-dom'
import "./ButtonNavar.css"

export const ButtonNavar = ({ text, icon, route }) => {
    return (
        <div className='button-navar-content'>
            <li className='button-navar'>
                <Link to={route}>
                    <i className={icon} />
                    <h3>{text}</h3>
                </Link>
            </li>
        </div>
    )
}

export default ButtonNavar