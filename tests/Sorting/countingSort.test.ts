import { countingSort } from '../../src';

describe('counting sort', () => {
    test('sorts array', () => {
        expect(
            countingSort(
                [5, 4, 3, 2, 1, 0],
                Math.max(...[5, 4, 3, 2, 1, 0]) -
                    Math.min(...[5, 4, 3, 2, 1, 0]) +
                    1
            )
        ).toEqual([0, 1, 2, 3, 4, 5]);
    });
});
