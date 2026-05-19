import { Outlet } from "react-router-dom";
import { Nav } from "../layout/Navar/Nav";
import "./LayoutPrivado.css"

const LayoutPrivado = () => {
    return (
        <div className='layout-privado-content-all'>

            <div className='layout-privado-nav'>
                <Nav />
            </div>

            <div className='layout-privado-content'>
                <Outlet />
            </div>

        </div>
    );
};

export default LayoutPrivado;