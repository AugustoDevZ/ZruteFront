import { create } from "zustand";

export const useUbicacionStore = create((set) => ({

    ubicacion: null,

    setUbicacion: (nuevaUbicacion) =>
        set({
            ubicacion: nuevaUbicacion
        }),

}));


/*=================== Estados globales

const ubicacion = useUbicacionStore((state) => state.ubicacion); asi asignamos valores para poder usarla



const ubicacion = useUbicacionStore((state) => state.ubicacion); asi obtenemos valor




ejemplo de ese objeto 

const usuario = {
  nombre: "Augusto"
};

usuario.nombre = "Juan";


*/