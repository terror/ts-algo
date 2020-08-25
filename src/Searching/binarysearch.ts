const binarySearch = (arr: number[], el: number): number => {
    let lo: number = 0;
    let hi: number = arr.length - 1;
    while (lo <= hi) {
        let mid: number = Math.floor((lo + hi) / 2);
        if (arr[mid] === el) {
            return mid;
        }
        if (arr[mid] < el) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
};

export { binarySearch };
