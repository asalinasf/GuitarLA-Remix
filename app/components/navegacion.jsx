import { useState } from "react";
import { Link, useLocation } from "@remix-run/react";
import imagen from "../../public/img/carrito.png";

const Navegacion = ({ context }) => {
  console.log("navegacion", context);

  const cantidad = context?.length;
  const location = useLocation();
  return (
    <nav className="navegacion">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Inicio
      </Link>
      <Link
        to="/nosotros"
        className={location.pathname === "/nosotros" ? "active" : ""}
      >
        Nosotros
      </Link>
      <Link
        to="/guitarras"
        className={location.pathname === "/guitarras" ? "active" : ""}
      >
        Tienda
      </Link>
      <Link
        to="/blog"
        className={location.pathname === "/blog" ? "active" : ""}
      >
        Blog
      </Link>
      <Link to="/carrito">
        <img src={imagen} alt="Imagen carrito" />
        <span className="cantidad-carrito">{cantidad}</span>
      </Link>
    </nav>
  );
};

export default Navegacion;
