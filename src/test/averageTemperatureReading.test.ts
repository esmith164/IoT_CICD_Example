import { averageTemperatureReading } from '../averageTemperatureReading';
import { describe, expect, it } from "vitest";

describe('averageTemperatureReading', () => {
    it('should return 0 for empty array', () => {
        expect(averageTemperatureReading([])).toBe(0);
    });

    it('should calculate average correctly', () => {
        expect(averageTemperatureReading([10, 20, 30])).toBe(20);
        expect(averageTemperatureReading([5, 15])).toBe(10);
    });
        it('should calculate average nagtives correctly', () => {
        expect(averageTemperatureReading([-10, -20, -30])).toBe(-20);
        expect(averageTemperatureReading([-5, -15])).toBe(-10);
        expect(averageTemperatureReading([-5, -5, -5])).toBe(-5);

    });

});
