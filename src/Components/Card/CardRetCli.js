import React from 'react'
import { Card,ProgressBar } from '@tremor/react';

export const CardSales = () => {
    return (
    <div> 
        <Card className="mx-auto max-w-xs" decoration="top" decorationColor="indigo">
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Costo de adquisición de Clientes</p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$1,743</p>
            <ProgressBar value={72}/>
        </Card>
    </div>
    
    )
}



