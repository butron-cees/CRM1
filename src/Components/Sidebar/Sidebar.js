import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import { useAuth0 } from '@auth0/auth0-react';
import 'primeicons/primeicons.css';
import './Sidebarr.css'

export default function SidebarLat() {
    const [visible, setVisible] = useState(false);
    const btnRef1 = useRef(null);
    const { user } = useAuth0();

    return (
        <div className="card flex justify-content-center">
            <Sidebar className="sidebar-lat" visible={visible} onHide={() => setVisible(false)}>
                <div className='flex flex-wrap align-items-center justify-content-between flex-shrink-0'>
                    <img src="./img/logo_nsr.webp" alt="" className="logo" />
                </div>
                <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                <h2>Sidebar</h2>
                <div className="overflow-y-auto">
                    <ul className="list-none p-3 m-0">
                        <li>
                            <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                <div ref={btnRef1} className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer">
                                    <span className="font-medium">FAVORITES</span>
                                    <i className="pi pi-chevron-down"></i>
                                    <Ripple />
                                </div>
                            </StyleClass>
                            <ul className="list-none p-0 m-0 hidden overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
                                <li>
                                    <Link to='/Dashboard' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-chart-bar mr-2"></i>
                                        <span className="font-medium">Dashboard</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Clientes' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-users mr-2"></i>
                                        <span className="font-medium">Clientes</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Cita' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-calendar mr-2"></i>
                                        <span className="font-medium">Agendar Cita</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Facturas' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-folder mr-2"></i>
                                        <span className="font-medium">Facturas</span>
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Catalogo' className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                        <i className="pi pi-folder mr-2"></i>
                                        <span className="font-medium">Catalogo</span>
                                        <Ripple />
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
                <div className='us'>
                    <img src={user.picture} alt={user.name} />
                    <span className='nombre_usuario'>
                    <p className='Nombre_Usuario'>{user.name}</p>
                    </span>
                </div>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} className="sidebar-lat-button" />
        </div>
    );
}

