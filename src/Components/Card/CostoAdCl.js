import { Card, ProgressBar } from '@tremor/react';

export function ProgressBarUsageExample() {
    return (
    <>
        <Card className="mx-auto max-w-sm">
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
            <span>Tasa de retención de Clientes &bull; 45%</span>
        </p>
        <ProgressBar value={45} color="teal" className="mt-3" />
        </Card>
    </>
    );
}