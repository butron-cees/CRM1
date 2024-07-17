
import React, { useRef, useState } from "react";
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import './Cita.css'



export default function Cita() {
    const stepperRef = useRef(null);

    const [selectedCit, setSelectedCit] = useState(null);
    const cita = [
        { name: 'Manicure' },
        { name: 'Uñas de Gel' },
        { name: 'Diseño de Uñas' },
        { name: 'Uñas Acrílicas' },
        { name: 'Diseño de Uñas 3D' }

    ];

    const [selectedSuc, setSelectedSuc] = useState(null);
    const sucu = [
        { name: 'Avenida Primavera 123, Colonia Bella Vista' },
        { name: 'Calle Diamante 678, Barrio Brillante' },
        { name: 'Avenida Mar 901, Barrio Marino' },
        { name: 'Calle Coral 234, Urbanización Coralina' },
        { name: 'Calle Rosa 456, Zona Flores' }

    ];

    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmada', detail: 'Tu cita fue agendada', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Error!', detail: 'Ocurrio un error al inetntar agendar tu cita', life: 3000 });
    }

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(new Date());




    return (
        <div className='container mx-auto pt-10'>
            <h6>Cecilia Esther Butrón Morales</h6>
            <h2 className='titulo'>Agendar Cita</h2>
            <hr className="mb-3 mx-3 border-top-2 border-bottom-1 linea" />

            <div className="card flex justify-content-center">
                <Stepper ref={stepperRef} style={{ flexBasis: '100rem' }}>

                    <StepperPanel header="Tipo de Cita">
                        <div className="tituloo container mx-auto pt-10">
                            <h2>Tipo de Cita</h2>
                        </div>
                        <div className="flex flex-column h-12rem">
                            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                                <div className="card flex justify-content-center">
                                    <Dropdown value={selectedCit} onChange={(e) => setSelectedCit(e.value)} options={cita} optionLabel="name"
                                        placeholder="Seleccione tipo de cita" className="w-full md:w-14rem " />
                                </div>
                            </div>
                        </div>
                        <div className="flex pt-10 justify-content-end">
                            <Button label="" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                        </div>
                    </StepperPanel>

                    <StepperPanel header="Sucursal">
                        <div className="tituloo container mx-auto pt-10">
                            <h2>Sucursal</h2>
                        </div>
                        <div className="flex flex-column h-12rem">
                            <div className="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">
                                <div className="card flex justify-content-center">
                                    <Dropdown value={selectedSuc} onChange={(e) => setSelectedSuc(e.value)} options={sucu} optionLabel="name"
                                        placeholder="Elige la sucursal a la que deseas asistir" className="w-full md:w-14rem " />
                                </div>
                            </div>
                        </div>
                        <div className="flex pt-10 justify-content-end">
                            <Button label="" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                            <Button label="" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                        </div>
                    </StepperPanel>

                    <StepperPanel header="Fecha y Hora" className="flex justify-center items-center h-screen">
                        <div className="tituloo container mx-auto pt-10">
                            <h2>Fecha y Hora</h2>
                        </div>
                        <div className="card flex flex-wrap gap-3 p-fluid">
                            <div className="flex-auto">
                                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                                    Definir Fecha
                                </label>
                                <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon />
                            </div>
                            <div className="flex-auto">
                                <label htmlFor="buttondisplay" className="font-bold block mb-2">
                                    Definir Hora
                                </label>

                                <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon timeOnly icon={() => <i className="pi pi-clock" />} />
                            </div>

                        </div>
                        <div className="flex pt-4 justify-between">
                            <Button label="" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                            <Button label="" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                        </div>
                    </StepperPanel>

                    <StepperPanel header="Confirmar Cita" className="flex justify-center items-center h-screen">
                        <div className="container mx-auto pt-10 text-left">
                            <div className="tituloo container mx-auto pt-10">
                                <h2>Confirmar Cita</h2>
                            </div>
                            <h2 className="text-left" >Ingrese sus datos para confirmar la cita</h2>
                            <div className="mt-4">
                                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                                <input type="text" id="nombre" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
                                <input type="text" id="apellido" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
                                <input type="tel" id="telefono" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="flex pt-4 justify-between">
                                <Button label="" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                                <Toast ref={toast} />
                                <ConfirmDialog group="declarative" visible={visible} onHide={() => setVisible(false)} message="Seguro que quieres continuar?"
                                    header="Confirmación" accept={accept} reject={reject} />
                                <div className="card flex justify-content-center">
                                    <Button onClick={() => setVisible(true)} icon="pi pi-check" label="" />
                                </div>
                            </div>
                        </div>
                    </StepperPanel>

                </Stepper>
            </div>
        </div>
    )
}
