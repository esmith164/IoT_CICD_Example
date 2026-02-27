const FAN_OFF_THRESHOLD = 30;

export function shouldTurnOffFan(temperature: number): boolean {
    return temperature >= FAN_OFF_THRESHOLD;
}
