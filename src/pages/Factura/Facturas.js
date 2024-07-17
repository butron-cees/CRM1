import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import './Facturas.css'; 

export default function BasicDemo() {
    return (
        <div className='container mx-auto pt-10'>
            <h6>Eduardo Guzmán Navarrete</h6>
            <h2 className='titulo'>Facturas</h2>
            <hr className="mb-3 mx-3 border-top-2 border-bottom-1 linea" />
        <div className="card">
            <TabView>
                <TabPanel header="Persona Física">
                    <form className="form">
                        <div className="form-group">
                            <label>Nombre:</label>
                            <input type="text" className="form-input"/>
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-input"/>
                        </div>
                        <div className="form-group">
                            <label>RFC de la persona física:</label>
                            <textarea className="form-input"></textarea>
                        </div>
                        <button type="submit" className="form-button">Enviar</button>
                    </form>
                </TabPanel>
                <TabPanel header="Persona Moral">
                    <form className="form">
                        <div className="form-group">
                            <label>Nombre:</label>
                            <input type="text" className="form-input"/>
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-input"/>
                        </div>
                        <div className="form-group">
                            <label>RFC de la persona moral:</label>
                            <textarea className="form-input"></textarea>
                        </div>
                        <button type="submit" className="form-button">Enviar</button>
                    </form>
                </TabPanel>
            </TabView>
        </div>
       </div>
    );
}