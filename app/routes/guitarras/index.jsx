import { getGuitarras } from "~/models/guitarras.server";
import { useLoaderData, Outlet } from "@remix-run/react";
import ListadoGuitarras from "~/components/listado-guitarras";

export function meta() {
  return {
    title: "GuitarLA - Tienda",
    description: "Nuestra coleccion de guitarras electricas y acusticas",
  };
}

export async function loader() {
  const guitarras = await getGuitarras();

  return guitarras.data;
}

const Tienda = () => {
  const guitarras = useLoaderData();

  return <ListadoGuitarras guitarras={guitarras} />;
};

export default Tienda;
