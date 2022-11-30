function titleCase(str) {
    let words = str.split(" ");
    let newstring = [];
    for (let i = 0; i < words.length; i++) {
        newstring[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1).toLowerCase();

    }
    console.log(newstring);
    return newstring.join(" ");
}

titleCase("I'm a little tea pot");
