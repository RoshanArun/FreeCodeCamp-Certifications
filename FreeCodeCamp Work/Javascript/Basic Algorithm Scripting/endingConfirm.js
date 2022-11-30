function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");

confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");

confirmEnding("Abstraction", "action");
