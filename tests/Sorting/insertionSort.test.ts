import { insertionSort } from '../../src';

describe('insertion sort', () => {
    test('sorts array', () => {
        expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
        expect(insertionSort([4, 123, 33, 3, 9])).toEqual([3, 4, 9, 33, 123]);
        expect(insertionSort([33, 2343, 1111, 33, 79, 44, 23, 1])).toEqual([
            1,
            23,
            33,
            33,
            44,
            79,
            1111,
            2343,
        ]);
    });
});
