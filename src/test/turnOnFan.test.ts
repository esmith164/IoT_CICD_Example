import { shouldTurnOnFan } from '../turnOnFan';

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
});
