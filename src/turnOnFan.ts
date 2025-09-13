const FAN_ON_THRESHOLD = 30;

export function shouldTurnOnFan(temperature: number): boolean {
    return temperature >= FAN_ON_THRESHOLD;
}
