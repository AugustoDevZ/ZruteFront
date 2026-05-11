import { Outlet } from "react-router-dom";
import { Nav } from "../layout/Navar/Nav";

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