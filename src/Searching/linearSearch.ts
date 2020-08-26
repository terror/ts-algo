const linearSearch = (arr: number[], el: number) => {
    for (let i: number = 0; i < arr.length; ++i) if (arr[i] == el) return i;
    return -1;
};

export { linearSearch };
