import { toggleLed, getLedState } from '../toggleLed';

describe('toggleLed', () => {
    it('should toggle the LED state', () => {
        const initial = getLedState();
        const toggled = toggleLed();
        expect(toggled).toBe(!initial);
        expect(getLedState()).toBe(toggled);
    });

    it('should toggle back and forth', () => {
        toggleLed();
        const state1 = getLedState();
        toggleLed();
        const state2 = getLedState();
        expect(state2).toBe(!state1);
    });
});