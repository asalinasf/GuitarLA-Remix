import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";
import Navegacion from "./navegacion";

const Header = ({ context }) => {
  console.log("header", context.carrito);
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/">
          <img src={logo} alt="logo " className="logo" />
        </Link>
        <Navegacion context={context.carrito} />
      </div>
    </header>
  );
};

export default Header;
