import { Outlet } from "react-router-dom";
import { Nav } from "../Nav";

const LayoutPrivado = () => {
    return (
        <>
            <div className="content-private">
                <Nav />
                <Outlet />
            </div>
        </>
    );
};

export default LayoutPrivado;