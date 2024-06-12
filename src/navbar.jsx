import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContextHook } from "./context/context";

export const Navbar = () => {
  const { email, setState } = useContextHook();

  const navigate = useNavigate();

  const handlesignOut = () => {
    setState({ email: null, accesToken: null });
    localStorage.removeItem("auth");

    navigate("/login");
  };

  return (
    <>
      <header>
        <h1>
          <Link to="/">
            <img src="/logo2.jpg" />
          </Link>
        </h1>
        {email == null && (
          <nav>
            <Link to="/login"> Iniciar sesión</Link>
            <Link to="/Register"> Registrarse</Link>
          </nav>
        )}
        <article className="user-info" style={{ display: email ? "" : "none" }}>
          <span >{email}</span>
          <button onClick={handlesignOut} className="btn-logout">
            Cerrar sesión
          </button>
        </article>
      </header>
    
      {email != null && (
      <div>
          <Link to="/dash/conteo"> Conteo</Link>
          <Link to="/dash/palindroma"> Palindroma</Link>
          <Link to="/dash/conteoArchivo"> Conteo Archivo</Link>
      </div>
      )}

      <Outlet />
    </>
  );
};
