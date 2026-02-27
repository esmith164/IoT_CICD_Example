import { shouldTurnOffFan } from '../turnOffFan';
import { describe, expect, it } from "vitest";

describe('shouldTurnOffFan', () => {
    it('should return false below threshold', () => {
        expect(shouldTurnOffFan(0)).toBe(false);
    });

    it('should return false at threshold', () => {
        expect(shouldTurnOffFan(0)).toBe(true);
    });

    it('should return false above threshold', () => {
        expect(shouldTurnOffFan(0)).toBe(true);
    });
});
