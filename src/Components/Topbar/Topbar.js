import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Topbar.css';
import { LogoutButton } from '../Logout/Logout';
import Sidebar1 from '../Sidebar/Sidebar';

const Topbar = () => {
  const { user } = useAuth0();

  return (
    <div className="topbar">
      <Sidebar1/>
      <LogoutButton/>
      <span className='saludo'>Bienvenido, {user.name}</span>
      <img src={user.picture} alt={user.name} />
    </div>
  );
};

export default Topbar;