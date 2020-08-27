const mergeSort = (arr: number[]) => {
    const n: number = arr.length;
    if (n > 1) {
        let mid: number = Math.floor(n / 2);
        let l: number[] = arr.slice(0, mid);
        let r: number[] = arr.slice(mid);

        mergeSort(l);
        mergeSort(r);

        let i: number = 0,
            j: number = 0,
            k: number = 0;

        while (i < l.length && j < r.length) {
            if (l[i] < r[j]) (arr[k] = l[i]), ++i;
            else (arr[k] = r[j]), ++j;
            ++k;
        }

        while (i < l.length) (arr[k] = l[i]), ++k, ++i;
        while (j < r.length) (arr[k] = r[j]), ++k, ++j;

        return arr;
    }
    return -1;
};

export { mergeSort };
