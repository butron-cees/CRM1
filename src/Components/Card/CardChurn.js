import { Card, ProgressCircle } from '@tremor/react';

export function ProgressCircleUsageExample() {
    return (
    <div className="space-y-10">
        <div className="space-y-3">
        
        <Card className="mx-auto max-w-sm">
            <div className="flex justify-start space-x-5 items-center">
            <ProgressCircle value={75} size="md" />
            <div>
                <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                Tasa de Clientes Perdidos (15%)
                </p>
            </div>
            </div>
        </Card>
    </div>
    </div>
    );
}