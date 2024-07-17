import { Card, MarkerBar } from '@tremor/react';

export function MarkerBarRangeUsageExample() {
    return (
    <>
        <Card className="mx-auto max-w-sm">
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
            <span>Probabilidad de recomendación &bull; 75%</span>
        </p>
        <MarkerBar
            value={75}
            minValue={90}
            maxValue={90}
            color="blue"
            className="mt-3"
        />
        </Card>
    </>
    );
}