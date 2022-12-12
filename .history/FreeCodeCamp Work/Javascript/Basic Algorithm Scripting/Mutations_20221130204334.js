function mutation(arr) {
    const word1 = arr[0].toLowerCase();
    const word2 = arr[1].toLowerCase();

    console.log(word1[0].indexOf(word2));

    for (let i = 0; i < word2.length; i++) {
        if (word1.indexOf(word2[i]) < 0) {
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);