let speakerState = false;

export function toggleLed(): boolean {
    speakerState = !speakerState;
    return speakerState;
}

export function getLedState(): boolean {
    return speakerState;
}
