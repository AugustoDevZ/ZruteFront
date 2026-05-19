import { useNavigate } from "react-router-dom";
import { exitAuthService } from "../Services/authService"

export const useExit = () => {
    const navigate = useNavigate();

    const exit = () => {
        console.log("Clic clic");
        exitAuthService();
        navigate("/login");
    };

    return exit;
};