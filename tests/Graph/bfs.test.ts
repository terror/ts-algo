import { bfs } from '../../src';

describe('bfs', () => {
    test('simple graph', () => {
        expect(
            bfs(
                [],
                {
                    0: [1, 2, 3],
                    1: [0, 4, 5],
                    2: [0, 6, 7],
                    3: [0, 7],
                    4: [1],
                    5: [1],
                    6: [2],
                    7: [2, 3],
                },
                1
            )
        ).toEqual([1, 0, 4, 5, 2, 3, 6, 7]);
    });
});
