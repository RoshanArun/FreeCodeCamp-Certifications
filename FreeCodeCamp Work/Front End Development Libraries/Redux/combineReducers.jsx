const ADD = 'ADD';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

let count = 0;

const addNum = () => {
    count = count + 1
}

store.subscribe(addNum)

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);