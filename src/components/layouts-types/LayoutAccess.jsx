import { Outlet } from "react-router-dom";
import { Nav } from "../layout/Navar/Nav.jsx";

const LayoutAccess = () => {
    return (
        <>
            <section id="content" className="content">
                <Outlet />
            </section>
        </>
    );
};

export default LayoutAccess;