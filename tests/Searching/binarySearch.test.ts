import { binarySearch } from '../../src';

describe('binarySearch', () => {
    test('empty', () => {
        expect(binarySearch([], 10)).toBe(-1);
    });

    test('edge cases', () => {
        expect(binarySearch([1], 1)).toBe(0);
        expect(binarySearch([1], 0)).toBe(-1);
        expect(binarySearch([1, 2], 2)).toBe(1);
        expect(binarySearch([10, 400], 10)).toBe(0);
        expect(binarySearch([100, 500], 20)).toBe(-1);
    });

    test('more than 2 elements', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
        expect(binarySearch([2, 4, 6, 7, 9, 10], 6)).toBe(2);
        expect(binarySearch([80, 100, 200, 500, 1000], 2000)).toBe(-1);
        expect(binarySearch([80, 2000, 4000, 5000, 10000], 5000)).toBe(3);
        expect(binarySearch([1, 5, 90, 120], -1)).toBe(-1);
    });
});
