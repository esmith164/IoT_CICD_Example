import { toggleSpeaker, getSpeakerState } from '../toggleSpeaker';
import { describe, expect, it } from "vitest";

describe('toggleSpeaker', () => {
    it('should toggle the Speaker state', () => {
        const initial = getSpeakerState();
        const toggSpeaker = toggleSpeaker();
        expect(toggSpeaker).toBe(!initial);
        expect(getSpeakerState()).toBe(toggSpeaker);
    });

    it('should toggle back and forth', () => {
        toggleSpeaker();
        const state1 = getSpeakerState();
        toggleSpeaker();
        const state2 = getSpeakerState();
        expect(state2).toBe(!state1);
    });
});