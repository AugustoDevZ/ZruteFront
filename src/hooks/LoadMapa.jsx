import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { rutaAmerica } from "./ruta1";
import { useState, useEffect } from "react";
import { useUbicacionStore } from "../store/useUbicacionStore";



delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});


function CambiarVista({ center }) {
    const map = useMap();

    useEffect(() => {
        if (center) {
            map.setView(center, 26);
        }
    }, [center, map]);

    return null;
}



function LoadMapa() {

    const ubicacion = useUbicacionStore((state) => state.ubicacion);
    const setUbicacion = useUbicacionStore((state) => state.setUbicacion);

    const limitesTrujillo = [
        [-8.20, -79.15],
        [-7.95, -78.95],
    ];

    const fixed = rutaAmerica.map(([lng, lat]) => [lat, lng]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                if(!lat && !lng){
                    console.log(`Error ${lat} y ${lng}`)
                    setUbicacion([0,0]);
                    return;
                }
                

                setUbicacion([lat, lng]);
            },
            (error) => {
                console.log("Error obteniendo ubicación:", error);
                //gente aqui por las dudas ns que hacer si sale que no puede obtener ubicacion
            }
        );
    }, []);

    return (
        
        <MapContainer
            center={[-8.1010, -79.0300]}
            zoom={14}
            minZoom={13}
            maxZoom={18}
            maxBounds={limitesTrujillo}
            //cuidado gente aqui rutaAmerica debe ser /*[latitud, longitud] */ 
            // pero fixed  arriba si viene /*[longitud, latitud] apra cambiar orden*/ 
            maxBoundsViscosity={1.0}
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polyline
                positions={fixed}
                color="red"
                weight={6}
            />

            {ubicacion && (
                <>
                    <CambiarVista center={ubicacion} />

                    <Marker position={ubicacion}>
                        <Popup>
                            Estás aquí
                        </Popup>
                    </Marker>
                </>
            )}
        </MapContainer>
    );
}

export default LoadMapa;