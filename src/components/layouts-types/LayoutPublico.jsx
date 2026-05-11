import { Outlet } from "react-router-dom";
import { Headers } from "../layout/Header/Headers";

const LayoutPublico = () => {
    return (
        <>
            <Headers />
            <section id="content" className="content">
                <Outlet />
            </section>
        </>
    );
};

export default LayoutPublico;

//exports defaults es este export default LayoutPublico; 
// y cuando tiene export nobrados es normal sin eso .¡su export cambia :DD