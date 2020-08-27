const countingSort = (arr: number[], k: number) => {
    let f: number[] = new Array(k).fill(0);
    for (let i: number = 0; i < arr.length; ++i) ++f[arr[i]];
    for (let i: number = 1; i < arr.length; ++i) f[i] = f[i - 1] + f[i];
    let ans: number[] = new Array(k).fill(0);
    arr.slice()
        .reverse()
        .forEach((el) => {
            (ans[f[el] - 1] = el), --f[el];
        });
    return ans;
};

export { countingSort };
