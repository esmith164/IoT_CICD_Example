let speakerState = false;

export function toggleSpeaker(): boolean {
    speakerState = !speakerState;
    return speakerState;
}

export function getSpeakerState(): boolean {
    return speakerState;
}
