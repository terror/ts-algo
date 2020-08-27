const insertionSort = (arr: number[]) => {
    for (let i: number = 1; i < arr.length; ++i) {
        let key: number = arr[i],
            j: number = i - 1;
        while (j >= 0 && key < arr[j])
            (arr[j + 1] = arr[j]), --j, (arr[j + 1] = key);
    }
    return arr;
};

export { insertionSort };
