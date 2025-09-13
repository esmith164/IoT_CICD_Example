export function averageTemperatureReading(readings: number[]): number {
    if (readings.length === 0) return 0;
    const sum = readings.reduce((acc, curr) => acc + curr, 0);
    return sum / readings.length;
}
