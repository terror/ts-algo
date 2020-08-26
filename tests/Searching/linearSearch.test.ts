import { linearSearch } from '../../src';

describe('linear search', () => {
    test('empty', () => {
        expect(linearSearch([], 10)).toBe(-1);
    });

    test('edge cases', () => {
        expect(linearSearch([1], 1)).toBe(0);
        expect(linearSearch([0], 1)).toBe(-1);
        expect(linearSearch([2, 2, 2], 2)).toBe(0);
    });

    test('more than 2 values', () => {
        expect(linearSearch([1, 2, 2, 3, 4, 5, 6, 3, 1], 1)).toBe(0);
        expect(linearSearch([9, 10, 22, 3, 4], 10)).toBe(1);
        expect(linearSearch([8, 9, 100, 23, 50, 80, 80, 100, 2000], 2)).toBe(
            -1
        );
        expect(linearSearch([8, 9, 100, 23, 50, 80, 80, 100, 2000], 2000)).toBe(
            8
        );
    });
});
