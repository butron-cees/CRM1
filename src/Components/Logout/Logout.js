import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        
        <button onClick={() => logout({ logoutParams: { returnTo: "https://butron-cees.github.io/CRM1" } })}>
        LogOut
   </button>
        /* 
        <button
        onClick={() => logout()}>
            Cerrar Sesión

        </button>
        */
    )
}