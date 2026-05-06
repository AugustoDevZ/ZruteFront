import { Outlet } from "react-router-dom";
import { Nav } from "../Nav";

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