let ledState = false;

export function toggleLed(): boolean {
    ledState = !ledState;
    return ledState;
}

export function getLedState(): boolean {
    return ledState;
}
