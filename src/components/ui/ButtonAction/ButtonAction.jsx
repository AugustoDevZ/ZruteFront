import React from 'react'
import { Link } from 'react-router-dom'
import "./ButtonAction.css"
import { useExit } from "../../../hooks/CloseAccount"

export const ButtonAction = ({ text, icon, action }) => {

    const exit = useExit();
    return (
        <div className='button-action-content'>
            <button onClick={exit} className='button-action'>
                <i className={icon} />
                <h3>{text}</h3>
            </button>
        </div>
    )
}

export default ButtonAction