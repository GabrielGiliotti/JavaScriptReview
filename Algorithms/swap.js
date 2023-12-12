function swap(arr, i) {
    let current = arr[i];
    let last = arr[i-1];
    arr[i] = last;
    arr[i-1] = current;
}

module.exports = swap;