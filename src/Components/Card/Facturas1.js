import { BarList } from '@tremor/react';

const datahero = [
{ name: 'Facturas Hechas', value: 456},
{ name: 'Facturas Por Hacer', value: 351},
];

export const BarListHero = () => (
<>
    <BarList data={datahero} className="mx-auto max-w-sm" />
</>
);