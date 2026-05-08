import '../../styles/headerButtons_v1.css'

import { useEffect, useState } from 'react';

import { VerificarTokenService } from '../../Services/authService';
import { PerfilUserService } from '../../Services/perfilService';

const HeaderButtonsStyle_v1 = () => {

    const [isAuth, setIsAuth] = useState(false);
    const [image, setImage] = useState("");

    useEffect(() => {

        const loadUser = async () => {

            const auth = await VerificarTokenService();

            setIsAuth(auth);

            if (auth) {

                const res = await PerfilUserService();
                if (!res?.data) {
                    console.log(`Errorrrrr ${res}`)
                    return;
                }

                if (res.img) {

                    const rute =
                        `data:image/png;base64,${data.image}`;
                    setImage(rute);

                } else {
                    setImage("/perfil-user.png");
                }
            }
        };

        loadUser();

    }, []);

    const separeOptions = () => {

        if (!isAuth) {

            return (
                <div>
                    <a className="header-button" href="/login">Acceder</a>
                    <a className="header-button" href="/register">Registrarme</a>
                </div>
            );
        }

        return (

            <div className='center'>
                <a className="header-button" href="/viajar">Empezar mi viaje</a>
                <img className="header-button-image" src={image} alt="" />
            </div>

        );
    };

    return (
        <div>
            {separeOptions()}
        </div>
    );
};

export default HeaderButtonsStyle_v1;