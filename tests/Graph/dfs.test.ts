import { dfs } from '../../src';

describe('dfs', () => {
    test('empty', () => {
        expect(dfs([], {}, 10)).toBe(-1);
    });

    test('graph is populated', () => {
        expect(dfs([], { 1: [2], 2: [3, 4], 3: [2], 4: [1] }, 1)).toEqual([
            1,
            2,
            3,
            4,
        ]);
    });
});
