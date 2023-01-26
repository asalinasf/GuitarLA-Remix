import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

export function meta() {
  return {
    title: "GuitarLA - Nosotros",
    description: "Venta de Guitarras, blog de musica",
  };
}
const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen nosotros" />
        <div className="">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            est in erat faucibus vulputate non sit amet velit. Vestibulum sit
            amet hendrerit augue. Aenean tristique enim ac ligula suscipit, a
            accumsan magna vehicula. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Pellentesque at
            eros sagittis, commodo nisi tristique, sagittis velit. Pellentesque
          </p>
          <p>
            ultrices posuere cubilia curae; Pellentesque odio quam, interdum in
            rhoncus sit amet, blandit vitae lectus. Pellentesque ut est ac dui
            finibus congue et ut libero. Vivamus gravida condimentum ex non
            vehicula. Ut pellentesque lectus neque, vitae imperdiet nisl sodales
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
