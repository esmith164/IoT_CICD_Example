import { shouldTurnOnFan } from '../turnOnFan';
import { describe, expect, it } from "vitest";

describe('shouldTurnOnFan', () => {
    it('should return false below threshold', () => {
        expect(shouldTurnOnFan(29)).toBe(false);
    });

    it('should return true at threshold', () => {
        expect(shouldTurnOnFan(30)).toBe(true);
    });

    it('should return true above threshold', () => {
        expect(shouldTurnOnFan(35)).toBe(true);
    });

    it('FAILURE DEMO: should fail because 40 is above threshold', () => {
        expect(shouldTurnOnFan(40)).toBe(false);
    });
});
