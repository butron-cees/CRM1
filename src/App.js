import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Topbar from './Components/Topbar/Topbar';
import Dashboard from './pages/Dashboard/Dashboard';
import { Clientes } from './pages/Clientes/Clientes';
import Cita from './pages/Cita/Cita';
import Catalogo from './pages/Catalogo/catalogo';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';
import Facturas from './pages/Factura/Facturas'

function App() {
  const { isAuthenticated } = useAuth0();
  console.log('is authenticated', isAuthenticated);
  console.log('Dashboard importado:', Dashboard);
  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Topbar />
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Clientes" element={<Clientes />} />
            <Route path="/Cita" element={<Cita />} />
            <Route path="/Facturas" element={<Facturas/>}/>
            <Route path="/Catalogo" element={<Catalogo/>}/>
          </Routes>
        </>
      ) : (
        <LoginButton />
      )}
    </div>

  );
}

export default App;