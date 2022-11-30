function frankenSplice(arr1, arr2, n) {
    let one = arr2.slice();
    one.splice(n, 0, ...arr1);
    return one;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
frankenSplice([1, 2, 3, 4], [], 0);
