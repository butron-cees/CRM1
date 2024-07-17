import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@tremor/react';
import './Clientes.css'

export const Clientes = () => (
    <div className='container mx-auto pt-10'>
        <h2 className='titulo'>Clientes</h2>
        <hr className="mb-3 mx-3 border-top-2 border-bottom-1 linea" />
        <TabGroup defaultIndex={0}>
    <TabList variant="line">
        <Tab value={0}>Vista Estándar</Tab>
        <Tab value={1}>Vista Compacta</Tab>
        <Tab value={2}>Vista Detallada</Tab>
    </TabList>

    <TabPanels>
        {/* TabPanel 1: Vista Estándar */}
        <TabPanel>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Nombre del Cliente</TableHeaderCell>
                        <TableHeaderCell className="text-right">Servicio</TableHeaderCell>
                        <TableHeaderCell>Fecha</TableHeaderCell>
                        <TableHeaderCell>Precio</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Maria García</TableCell>
                        <TableCell className="text-right">Manicure</TableCell>
                        <TableCell>2024-07-10</TableCell>
                        <TableCell>$25.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Juan Pérez</TableCell>
                        <TableCell className="text-right">Manicure y Pedicure</TableCell>
                        <TableCell>2024-07-11</TableCell>
                        <TableCell>$40.00</TableCell>
                    </TableRow>
                    {/* Agregar más filas según sea necesario */}
                </TableBody>
            </Table>
        </TabPanel>

        {/* TabPanel 2: Vista Compacta */}
        <TabPanel>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Nombre del Cliente</TableHeaderCell>
                        <TableHeaderCell>Precio</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Maria García</TableCell>
                        <TableCell>$25.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Juan Pérez</TableCell>
                        <TableCell>$40.00</TableCell>
                    </TableRow>
                    {/* Agregar más filas según sea necesario */}
                </TableBody>
            </Table>
        </TabPanel>

        {/* TabPanel 3: Vista Detallada */}
        <TabPanel>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Nombre del Cliente</TableHeaderCell>
                        <TableHeaderCell>Correo Electrónico</TableHeaderCell>
                        <TableHeaderCell>Servicio</TableHeaderCell>
                        <TableHeaderCell>Fecha</TableHeaderCell>
                        <TableHeaderCell>Precio</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Maria García</TableCell>
                        <TableCell>maria@example.com</TableCell>
                        <TableCell>Manicure</TableCell>
                        <TableCell>2024-07-10</TableCell>
                        <TableCell>$25.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Juan Pérez</TableCell>
                        <TableCell>juan@example.com</TableCell>
                        <TableCell>Manicure y Pedicure</TableCell>
                        <TableCell>2024-07-11</TableCell>
                        <TableCell>$40.00</TableCell>
                    </TableRow>
                    {/* Agregar más filas según sea necesario */}
                </TableBody>
            </Table>
        </TabPanel>
    </TabPanels>
</TabGroup>

    </div>

)