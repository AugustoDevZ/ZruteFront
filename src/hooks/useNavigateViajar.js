import { useNavigate } from "react-router-dom";
import { VerificarTokenService } from "../Services/authService";

export const useNavigateViajar = () => {

  const navigate = useNavigate();

  const navigateViajar = (e) => {

    e.preventDefault();

    const isAuth = VerificarTokenService();

    if (!isAuth) {
      navigate("/login");
      return;
    }

    navigate("/viajar");
  };

  return {
    navigateViajar
  };
};