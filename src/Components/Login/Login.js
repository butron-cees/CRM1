import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css'

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='login'>
      <section className='entrada'>
        <div className='desc'>
          <h1 className="titulo-prin">Bienvenido a nuestro CRM</h1>
          <h2 className="titulo_sec">Administración de visitas y clientes</h2>
        </div>
        <div className='boton1'>
          <button onClick={() => loginWithRedirect()}>
            <span className="transition"></span>
            <span className="gradient"></span>
            <span className="label">Iniciar Sesión</span>
          </button>
        </div>
      </section>
    </div>
  );
};