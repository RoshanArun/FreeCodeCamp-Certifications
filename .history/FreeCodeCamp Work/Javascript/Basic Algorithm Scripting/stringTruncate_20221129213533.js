function truncateString(str, num) {
    if (num < str.length) {
        return str.slice(0, num) + "...";
    }
    else {
        return str.slice(0, num);
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("Absolutely Longer", 2);