const main = () => {
  const arr: number[] = [1, 3, 4, 5, 6, 8, 9, 10];
  console.log(binarySearch(arr, 5));
};

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

main();
