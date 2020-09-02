import { cc } from '../../src';

describe('dfs', () => {
    test('simple graph', () => {
        expect(
            cc(
                [],
                {
                    0: [1],
                    1: [0, 2],
                    2: [1],
                    3: [4],
                    4: [3],
                },
                5
            )
        ).toEqual(2);
    });
});
